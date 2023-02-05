import { ICreateFoxAnimeDTO } from '../../../anime/dtos/ICreateFoxAnimeDTO';
import { ICreateFoxEpisodeDTO } from '../../../episode/dtos/ICreateFoxEpisodeDTO';
import { GetValidPlusAllEpisodes } from './GetValidPlusAllEpisodes';
import { GetValidPlusVideo } from './GetValidPlusVideo';
import { Logger } from '../../../processor/helpers/Logger';

import { ListAllEpisodeController } from '../../../episode/useCase/listAllEpisode/ListAllEpisodeController';
import { UpdateEpisodeController } from '../../../episode/useCase/updateEpisode/UpdateEpisodeController';

interface IProviderPlusEpisode {
  integration_episode_id: string;
  integration_id: string;
  title: string;
  episode: string;
}

interface IProviderPlusEpisodeVideoInfo {
  integration_episode_id: string;
  integration_id: string;
  title: string;
  episode: string;
  resolution: string;
  url: string;
}

class ProviderPlusEpisodeInfo {
  async execute(anime: ICreateFoxAnimeDTO): Promise<void> {
    const listAllEpisodeController = new ListAllEpisodeController();
    const updateEpisodeController = new UpdateEpisodeController();
    const logger = new Logger();

    let episode: IProviderPlusEpisode[] = [];
    let episodeVideo: IProviderPlusEpisodeVideoInfo[] = [];
    let episodesToProcess: IProviderPlusEpisodeVideoInfo[] = [];
    let indexedEpisodes: ICreateFoxEpisodeDTO[] = [];
    let episodesFormated: ICreateFoxEpisodeDTO[] = [];

    await Promise.all([
      await GetValidPlusAllEpisodes(anime.integration_id).then((episodes) => {
        episode = episodes;
      }),
      await listAllEpisodeController
        .handle({
          universal_anime_id: anime.universal_anime_id,
        })
        .then((episodes) => {
          indexedEpisodes = episodes;
        }),
      ...episode.map(
        async (ep) =>
          await GetValidPlusVideo(ep.integration_id).then((video) => {
            video.map((epVideo) => {
              episodeVideo.push({ ...epVideo, episode: ep.episode });
            });
          })
      ),
    ]);

    episodeVideo.map((ep) => {
      const isValid = !indexedEpisodes.some(
        (indexedDB) =>
          indexedDB.title === ep.title && indexedDB.episode.toString() === ep.episode.toString()
      );
      if (isValid) {
        episodesToProcess.push({
          integration_episode_id: ep.integration_episode_id,
          integration_id: ep.integration_id,
          resolution: ep.resolution,
          title: ep.title,
          url: ep.url,
          episode: ep.episode,
        });
      }
    });
    episodesToProcess.map((ep) => {
      const epToProcess = {
        alternative_name: anime.alternative_name,
        episode: Number(ep.episode),
        integration_episode_id: ep.integration_episode_id,
        last_version: 'S',
        integration_service: 'PLUS_' + anime.universal_anime_id,
        max_duration: '0',
        resolution: ep.resolution,
        resume: anime.resume,
        sub: anime.sub,
        title: anime.title,
        universal_anime_id: anime.universal_anime_id,
        updated_at: new Date(),
        url: ep.url,
        image: anime.image,
        created_at: new Date(),
        rateing: -1,
      };

      episodesFormated.push(epToProcess);
      logger.execute({
        epData: epToProcess,
        flag: 'passthought',
        universal_anime_id: anime.universal_anime_id,
      });
    });

    await Promise.all(
      episodesFormated.map(async (epFormat) => {
        await updateEpisodeController.handle(epFormat);
      })
    );
  }
}

export { ProviderPlusEpisodeInfo };
