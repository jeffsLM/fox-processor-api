import { container } from 'tsyringe';

import { ICreateFoxQueueDTO } from '../../dtos/ICreateFoxQueueDTO';
import { CreateQueueUseCase } from './CreateQueueUseCase';

interface IResponseObject {
  created: boolean;
  message: string;
}

class CreateQueueController {
  async handle(data: ICreateFoxQueueDTO): Promise<IResponseObject> {
    const { term, process, created_at, updated_at } = data;

    const createUserUseCase = container.resolve(CreateQueueUseCase);

    const result = await createUserUseCase.execute({
      term,
      process,
      created_at,
      updated_at,
    });

    return result;
  }
}

export { CreateQueueController };
