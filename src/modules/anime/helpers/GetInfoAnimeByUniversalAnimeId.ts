import { ListAnimeController } from '../useCase/listAnime/ListAnimeController';
import { ICreateFoxAnimeDTO } from '../dtos/ICreateFoxAnimeDTO';

interface IDataRequest {
  universal_anime_id: string;
}

class GetUniversalIdByTitle {
  async execute(data: IDataRequest): Promise<ICreateFoxAnimeDTO[]> {
    const { universal_anime_id } = data;
    const listAnimeController = new ListAnimeController();

    const animeData = await listAnimeController.handle({
      universal_anime_id,
    });

    return animeData;
  }
}

export { GetUniversalIdByTitle };
