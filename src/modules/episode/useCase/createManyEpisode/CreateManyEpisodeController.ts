import { container } from 'tsyringe';

import { ICreateFoxEpisodeDTO } from '../../dtos/ICreateFoxEpisodeDTO';
import { CreateManyEpisodeUseCase } from './CreateManyEpisodeUseCase';

interface IResponseObject {
  created: boolean;
  message: string;
}

class CreateManyEpisodeController {
  async handle(data: ICreateFoxEpisodeDTO[]): Promise<IResponseObject> {
    const createUserUseCase = container.resolve(CreateManyEpisodeUseCase);

    const result = await createUserUseCase.execute(data);

    return result;
  }
}

export { CreateManyEpisodeController };
