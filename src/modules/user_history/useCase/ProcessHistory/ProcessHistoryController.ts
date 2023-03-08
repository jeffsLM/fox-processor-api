import { In } from 'typeorm';
import { ListManyAnimeAnyTermController } from '../../../anime/useCase/listManyAnimeAnyTerm/ListManyAnimeAnyTermController';
import { ListUserHistoryController } from '../listHistory/ListUserHistoryController';
import { ICreateFoxAnimeDTO } from '../../../anime/dtos/ICreateFoxAnimeDTO';

interface IRequest {
  user: string;
}

class ProcessHistoryController {
  async handle(data: IRequest): Promise<ICreateFoxAnimeDTO[]> {
    const listManyAnimeAnyTermController = new ListManyAnimeAnyTermController();
    const listUserHistoryController = new ListUserHistoryController();

    const history = await listUserHistoryController.handle({ user: data.user });
    var list: string[] = [];

    history.map((item) => {
      list.push(item.universal_anime_id);
    });

    const dataReturn = await listManyAnimeAnyTermController.handle({
      where: { universal_anime_id: In([...list]) },
    });

    return dataReturn;
  }
}

export { ProcessHistoryController };
