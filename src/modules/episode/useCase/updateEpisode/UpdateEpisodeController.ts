import { container } from 'tsyringe';

import { UpdateEpisodeUseCase } from './UpdateEpisodeUseCase';
import { ICreateFoxEpisodeDTO } from '../../dtos/ICreateFoxEpisodeDTO';

interface IResponseObject {
  updated: boolean;
  message: string;
}

class UpdateEpisodeController {
  async handle(data: ICreateFoxEpisodeDTO): Promise<IResponseObject> {
    const {
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
    } = data;

    const updateEpisodeUseCase = container.resolve(UpdateEpisodeUseCase);

    const result = await updateEpisodeUseCase.execute({
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

export { UpdateEpisodeController };
