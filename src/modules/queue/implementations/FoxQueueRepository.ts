import { FindManyOptions, getRepository, Repository } from 'typeorm';

import { ICreateFoxQueueDTO } from '../dtos/ICreateFoxQueueDTO';
import { FoxQueue } from '../entities/FoxQueue';
import { IFoxQueueRepository } from '../repositories/IFoxQueueRepository';

class FoxQueueRepository implements IFoxQueueRepository {
  private repository: Repository<FoxQueue>;

  constructor() {
    this.repository = getRepository(FoxQueue);
  }

  async create({ term, key, process, created_at, updated_at }: ICreateFoxQueueDTO): Promise<void> {
    const data = {
      term,
      key,
      process,
      created_at,
      updated_at,
    };

    const queue_id = this.repository.create(data);

    await this.repository.insert(queue_id);
  }

  async find(condition: FindManyOptions<FoxQueue>): Promise<FoxQueue[]> {
    const queueInfo = await this.repository.find(condition);
    return queueInfo;
  }

  async save({ term, key, process, created_at, updated_at }: ICreateFoxQueueDTO): Promise<void> {
    await this.repository.update(
      {
        key,
      },
      {
        term,
        process,
        created_at,
        updated_at,
      }
    );
  }
}

export { FoxQueueRepository };
