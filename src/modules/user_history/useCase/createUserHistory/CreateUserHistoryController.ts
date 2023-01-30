import { container } from 'tsyringe';

import { ICreateFoxUserHistoryDTO } from '../../dtos/ICreateFoxUserHistoryDTO';
import { CreateUserHistoryUseCase } from './CreateUserHistoryUseCase';

interface IResponseObject {
  created: boolean;
  message: string;
}

class CreateUserHistoryController {
  async handle(data: ICreateFoxUserHistoryDTO): Promise<IResponseObject> {
    const {
      universal_anime_id,
      key,
      user,
      episode,
      watched_at,
      last_viewed_at,
      max_duration,
      progress,
    } = data;

    const createUserUseCase = container.resolve(CreateUserHistoryUseCase);

    const result = await createUserUseCase.execute({
      universal_anime_id,
      key,
      user,
      episode,
      watched_at,
      last_viewed_at,
      max_duration,
      progress,
    });

    return result;
  }
}

export { CreateUserHistoryController };
