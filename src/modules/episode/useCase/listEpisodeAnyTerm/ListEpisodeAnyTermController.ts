import { container } from 'tsyringe';
import { FindManyOptions } from 'typeorm';

import { ListEpisodeAnyTermUseCase } from './ListEpisodeAnyTermUseCase';
import { ICreateFoxEpisodeDTO } from '../../dtos/ICreateFoxEpisodeDTO';

class ListEpisodeAnyTermController {
  async handle(conditions: FindManyOptions<ICreateFoxEpisodeDTO>): Promise<ICreateFoxEpisodeDTO[]> {
    const listCharacterUserUseCase = container.resolve(ListEpisodeAnyTermUseCase);

    const list = await listCharacterUserUseCase.execute(conditions);

    return list;
  }
}

export { ListEpisodeAnyTermController };
