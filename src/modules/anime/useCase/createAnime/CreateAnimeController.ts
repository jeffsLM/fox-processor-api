import { container } from 'tsyringe';

import { ICreateFoxAnimeDTO } from '../../dtos/ICreateFoxAnimeDTO';
import { CreateAnimeUseCase } from './CreateAnimeUseCase';

interface IResponseObject {
  created: boolean;
  message: string;
}

class CreateAnimeController {
  async handle(data: ICreateFoxAnimeDTO): Promise<IResponseObject> {
    const {
      universal_anime_id,
      integration_service,
      integration_id,
      title,
      alternative_name,
      sub,
      resume,
      rateing,
      image,
      updated_at,
      status,
      status_describe,
    } = data;

    const createUserUseCase = container.resolve(CreateAnimeUseCase);

    const result = await createUserUseCase.execute({
      universal_anime_id,
      integration_service,
      integration_id,
      title,
      alternative_name,
      sub,
      resume,
      rateing,
      image,
      updated_at,
      status,
      status_describe,
    });

    return result;
  }
}

export { CreateAnimeController };
