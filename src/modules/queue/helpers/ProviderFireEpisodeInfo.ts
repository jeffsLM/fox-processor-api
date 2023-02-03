import { v4 as uuidv4 } from 'uuid';

import { ICreateFoxAnimeDTO } from '../../anime/dtos/ICreateFoxAnimeDTO';
import { ICreateFoxEpisodeDTO } from '../../episode/dtos/ICreateFoxEpisodeDTO';
import { GetValidFireEpisode } from './GetValidFireEpisode';

class ProviderFireEpisodeInfo {
  async execute(anime: ICreateFoxAnimeDTO, lastEpisode: number): Promise<ICreateFoxEpisodeDTO[]> {
    const episodeCount = Object.keys(new Array(100).fill(null)).map(Number);

    let allEpisodes: ICreateFoxEpisodeDTO[] = [];

    for (let i = lastEpisode; i <= episodeCount.length; i++) {
      const episodeData = await GetValidFireEpisode(anime.integration_id, i);
      if (episodeData?.response?.status !== '200' || !episodeData) {
        break;
      }

      episodeData.data.map((episode) => {
        console.log('anime', anime);
        console.log('anime64', anime.integration_id + '_' + uuidv4());
        console.log('episode', episode);
        allEpisodes.push({
          universal_anime_id: anime.universal_anime_id,
          integration_service: anime.integration_service,
          integration_episode_id: anime.integration_id + '_' + uuidv4(),
          episode: i,
          title: anime.title,
          alternative_name: anime.alternative_name,
          sub: anime.sub,
          resume: anime.resume,
          url: episode.src,
          image: anime.image,
          rateing: anime.rateing,
          last_version: 'N',
          resolution: episode.label,
          max_duration: '0',
          created_at: new Date(),
          updated_at: new Date(),
        });
      });
    }
    return allEpisodes;
  }
}

export { ProviderFireEpisodeInfo };
