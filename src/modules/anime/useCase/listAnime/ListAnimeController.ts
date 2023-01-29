import { container } from 'tsyringe';

import { ICreateFoxAnimeDTO } from '../../dtos/ICreateFoxAnimeDTO';
import { ListAnimeUseCase } from './ListAnimeUseCase';

interface IRequest {
  universal_anime_id: string;
}

class ListCharacterUserController {
  async handle(data: IRequest): Promise<ICreateFoxAnimeDTO[]> {
    const { universal_anime_id } = data;

    const listAnimesUserUseCase = container.resolve(ListAnimeUseCase);

    const list = await listAnimesUserUseCase.execute({
      universal_anime_id,
    });

    return list;
  }
}

export { ListCharacterUserController };
