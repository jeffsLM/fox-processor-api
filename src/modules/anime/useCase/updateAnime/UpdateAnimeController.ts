import { container } from 'tsyringe';

import { ICreateFoxAnimeDTO } from '../../dtos/ICreateFoxAnimeDTO';
import { UpdateAnimeUseCase } from './UpdateAnimeUseCase';

interface IResponseObject {
  created: boolean;
  message: string;
}

class UpdateAnimeController {
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

    const updateAnimeUseCase = container.resolve(UpdateAnimeUseCase);

    const result = await updateAnimeUseCase.execute({
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

export { UpdateAnimeController };
