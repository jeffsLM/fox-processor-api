import { inject, injectable } from 'tsyringe';
import { FindManyOptions } from 'typeorm';

import { FoxQueue } from '../../entities/FoxQueue';
import { IFoxQueueRepository } from '../../repositories/IFoxQueueRepository';

@injectable()
class ListQueueUseCase {
  constructor(
    @inject('FoxQueueRepository')
    private foxQueueRepository: IFoxQueueRepository
  ) {}

  async execute(condition: FindManyOptions<FoxQueue>): Promise<FoxQueue[]> {
    const historyUser = await this.foxQueueRepository.find(condition);
    return historyUser;
  }
}
export { ListQueueUseCase };
