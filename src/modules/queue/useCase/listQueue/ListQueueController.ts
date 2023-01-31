import { container } from 'tsyringe';
import { FindManyOptions } from 'typeorm';

import { ICreateFoxQueueDTO } from '../../dtos/ICreateFoxQueueDTO';
import { FoxQueue } from '../../entities/FoxQueue';
import { ListQueueUseCase } from './ListQueueUseCase';

class ListUserHistoryController {
  async handle(condition: FindManyOptions<FoxQueue>): Promise<ICreateFoxQueueDTO[]> {
    const listQueueUseCase = container.resolve(ListQueueUseCase);

    const list = await listQueueUseCase.execute(condition);

    return list;
  }
}

export { ListUserHistoryController };
