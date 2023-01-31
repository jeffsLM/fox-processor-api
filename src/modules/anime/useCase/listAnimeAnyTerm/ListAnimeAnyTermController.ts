import { container } from 'tsyringe';
import { FindOneOptions } from 'typeorm';

import { FoxAnime } from '../../entities/FoxAnime';
import { ICreateFoxAnimeDTO } from '../../dtos/ICreateFoxAnimeDTO';
import { ListAnimeAnyTermUseCase } from './ListAnimeAnyTermUseCase';

class ListAnimeAnyTermController {
  async handle(data: FindOneOptions<FoxAnime>): Promise<ICreateFoxAnimeDTO> {
    const listAnimesUserUseCase = container.resolve(ListAnimeAnyTermUseCase);

    const list = await listAnimesUserUseCase.execute(data);

    return list;
  }
}

export { ListAnimeAnyTermController };
