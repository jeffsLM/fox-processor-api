import { inject, injectable } from 'tsyringe';

import { ICreateFoxEpisodeDTO } from '../../dtos/ICreateFoxEpisodeDTO';
import { IFoxEpisodeRepository } from '../../repositories/IFoxEpisodeRepository';

interface IResponseObject {
  created: boolean;
  message: string;
}

@injectable()
class CreateEpisodeUseCase {
  constructor(
    @inject('FoxEpisodeRepository')
    private foxEpisodeRepository: IFoxEpisodeRepository
  ) {}

  async execute({
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
  }: ICreateFoxEpisodeDTO): Promise<IResponseObject> {
    await this.foxEpisodeRepository.create({
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

    return {
      created: true,
      message: 'success',
    };
  }
}
export { CreateEpisodeUseCase };
