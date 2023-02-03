import { container } from 'tsyringe';
import { FindManyOptions } from 'typeorm';

import { ICreateFoxQueueDTO } from '../../dtos/ICreateFoxQueueDTO';
import { FoxQueue } from '../../entities/FoxQueue';
import { SaveQueueUseCase } from './SaveQueueUseCase';

interface IResponseObject {
  updated: boolean;
  message: string;
}

class SaveQueueController {
  async handle(data: ICreateFoxQueueDTO): Promise<IResponseObject> {
    const saveQueueUseCase = container.resolve(SaveQueueUseCase);

    const result = await saveQueueUseCase.execute(data);

    return result;
  }
}

export { SaveQueueController };
