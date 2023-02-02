import { container } from 'tsyringe';

import { ICreateFoxEpisodeDTO } from '../../dtos/ICreateFoxEpisodeDTO';
import { CreateEpisodeUseCase } from './CreateEpisodeUseCase';

interface IResponseObject {
  created: boolean;
  message: string;
}

class CreateEpisodeController {
  async handle(data: ICreateFoxEpisodeDTO): Promise<IResponseObject> {
    const {
      universal_anime_id,
      integration_service,
      integration_episode_id,
      episode,
      title,
      alternative_name,
      sub,
      url,
      resume,
      image,
      rateing,
      last_version,
      resolution,
      max_duration,
      created_at,
      updated_at,
    } = data;

    const createUserUseCase = container.resolve(CreateEpisodeUseCase);

    const result = await createUserUseCase.execute({
      universal_anime_id,
      integration_service,
      integration_episode_id,
      episode,
      title,
      alternative_name,
      sub,
      resume,
      url,
      image,
      rateing,
      last_version,
      resolution,
      max_duration,
      created_at,
      updated_at,
    });

    return result;
  }
}

export { CreateEpisodeController };
