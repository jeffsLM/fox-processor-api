import { ListAllItensController } from '../useCase/listAllEpisode/ListAllEpisodeController';
import { ICreateFoxEpisodeDTO } from '../dtos/ICreateFoxEpisodeDTO';

interface IDataRequest {
  universal_anime_id: string;
}

class GetLastEpisodeIntegrateByAnimeId {
  async execute(data: IDataRequest): Promise<ICreateFoxEpisodeDTO> {
    const { universal_anime_id } = data;
    const listAllItensController = new ListAllItensController();

    const episodeData = await listAllItensController.handle({
      universal_anime_id,
    });

    return episodeData.at(-1);
  }
}

export { GetLastEpisodeIntegrateByAnimeId };
