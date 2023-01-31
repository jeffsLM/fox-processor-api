import { ListAnimeAnyTermController } from '../useCase/listAnimeAnyTerm/ListAnimeAnyTermController';
import { ICreateFoxAnimeDTO } from '../dtos/ICreateFoxAnimeDTO';
import { ILike } from 'typeorm';

interface IDataRequest {
  title: string;
}

interface IReturn extends ICreateFoxAnimeDTO {
  exists: boolean;
}

class GetUniversalIdByTitle {
  async execute(data: IDataRequest): Promise<IReturn> {
    const { title } = data;
    const listAnimeAnyTermController = new ListAnimeAnyTermController();

    const titleFormated = title.replace(' ', '%');
    const animeData = await listAnimeAnyTermController.handle({
      where: { title: ILike(`%${titleFormated}%`) },
    });

    return { ...animeData, exists: !!animeData };
  }
}

export { GetUniversalIdByTitle };
