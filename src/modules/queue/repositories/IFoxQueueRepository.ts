import { FindManyOptions } from 'typeorm';
import { ICreateFoxQueueDTO } from '../dtos/ICreateFoxQueueDTO';
import { FoxQueue } from '../entities/FoxQueue';

interface IFoxQueueRepository {
  create(data: ICreateFoxQueueDTO): Promise<void>;
  find(condition: FindManyOptions<FoxQueue>): Promise<FoxQueue[]>;
  save(data: ICreateFoxQueueDTO): Promise<void>;
}

export { IFoxQueueRepository };
