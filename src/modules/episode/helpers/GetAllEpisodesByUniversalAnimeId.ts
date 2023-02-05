import { ListAllEpisodeController } from '../useCase/listAllEpisode/ListAllEpisodeController';
import { ICreateFoxEpisodeDTO } from '../dtos/ICreateFoxEpisodeDTO';

interface IDataRequest {
  universal_anime_id: string;
}

class GetAllEpisodesByUniversalAnimeId {
  async execute(data: IDataRequest): Promise<ICreateFoxEpisodeDTO[]> {
    const { universal_anime_id } = data;
    const listAllItensController = new ListAllEpisodeController();

    const episodeData = await listAllItensController.handle({
      universal_anime_id,
    });

    return episodeData;
  }
}

export { GetAllEpisodesByUniversalAnimeId };
