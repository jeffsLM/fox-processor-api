import { container } from 'tsyringe';

import { ICreateFoxProcessorDTO } from '../../dtos/ICreateFoxProcessorDTO';
import { CreateProcessorUseCase } from './CreateProcessorUseCase';

interface IResponseObject {
  created: boolean;
  message: string;
}

class CreateUserHistoryController {
  async handle(data: ICreateFoxProcessorDTO): Promise<IResponseObject> {
    const {
      universal_anime_id,
      integration_service,
      key,
      last_version,
      episode,
      attempt,
      status,
      description,
      resolution,
      created_at,
    } = data;

    const createUserUseCase = container.resolve(CreateProcessorUseCase);

    const result = await createUserUseCase.execute({
      universal_anime_id,
      integration_service,
      key,
      last_version,
      episode,
      attempt,
      status,
      description,
      resolution,
      created_at,
    });

    return result;
  }
}

export { CreateUserHistoryController };
