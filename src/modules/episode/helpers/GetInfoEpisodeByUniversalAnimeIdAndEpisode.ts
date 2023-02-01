import { ListEpisodeController } from '../useCase/listEpisode/ListEpisodeController';
import { ICreateFoxEpisodeDTO } from '../dtos/ICreateFoxEpisodeDTO';

interface IDataRequest {
  universal_anime_id: string;
  episode: number;
}

class GetInfoEpisodeByUniversalAnimeIdAndEpisode {
  async execute(data: IDataRequest): Promise<ICreateFoxEpisodeDTO[]> {
    const { universal_anime_id, episode } = data;
    const listEpisodeController = new ListEpisodeController();

    const episodeData = await listEpisodeController.handle({
      universal_anime_id,
      episode,
    });

    return episodeData;
  }
}

export { GetInfoEpisodeByUniversalAnimeIdAndEpisode };
