import { ListAllEpisodeController } from '../useCase/listAllEpisode/ListAllEpisodeController';
import { ICreateFoxEpisodeDTO } from '../dtos/ICreateFoxEpisodeDTO';

interface IDataRequest {
  universal_anime_id: string;
}

class GetLastEpisodeIntegrateByAnimeId {
  async execute(data: IDataRequest): Promise<ICreateFoxEpisodeDTO> {
    const { universal_anime_id } = data;
    const listAllEpisodeController = new ListAllEpisodeController();
    const episodeData = await listAllEpisodeController.handle({
      universal_anime_id,
    });

    const dataDefault = {
      universal_anime_id: universal_anime_id,
      integration_service: '',
      integration_episode_id: '',
      episode: 0,
      title: '',
      alternative_name: '',
      sub: '',
      resume: '',
      url: '',
      image: '',
      rateing: 0,
      last_version: '',
      resolution: '',
      max_duration: '',
      created_at: new Date(),
      updated_at: new Date(),
    };

    return episodeData.length > 0 ? episodeData.at(-1) : dataDefault;
  }
}

export { GetLastEpisodeIntegrateByAnimeId };
