import { container } from 'tsyringe';
import { FindManyOptions } from 'typeorm';

import { FoxAnime } from '../../entities/FoxAnime';
import { ICreateFoxAnimeDTO } from '../../dtos/ICreateFoxAnimeDTO';
import { ListManyAnimeAnyTermUseCase } from './ListManyAnimeAnyTermUseCase';

class ListManyAnimeAnyTermController {
  async handle(data: FindManyOptions<FoxAnime>): Promise<ICreateFoxAnimeDTO[]> {
    const listAnimesUserUseCase = container.resolve(ListManyAnimeAnyTermUseCase);

    const list = await listAnimesUserUseCase.execute(data);

    return list;
  }
}

export { ListManyAnimeAnyTermController };
