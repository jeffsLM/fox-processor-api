import { inject, injectable } from 'tsyringe';

import { IFoxEpisodeRepository } from '../../repositories/IFoxEpisodeRepository';
import { ICreateFoxEpisodeDTO } from '../../dtos/ICreateFoxEpisodeDTO';

interface IResponseObject {
  updated: boolean;
  message: string;
}

@injectable()
class UpdateEpisodeUseCase {
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
    url,
    resume,
    image,
    rateing,
    last_version,
    resolution,
    max_duration,
    created_at,
  }: ICreateFoxEpisodeDTO): Promise<IResponseObject> {
    const episodeAlreadyExists = await this.foxEpisodeRepository.find({
      where: { universal_anime_id: universal_anime_id, episode: episode, resolution: resolution },
    });

    if (!episodeAlreadyExists) {
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
        created_at: new Date(),
        updated_at: new Date(),
      });
    }
    await this.foxEpisodeRepository.save({
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
      updated_at: new Date(),
    });
    return {
      updated: true,
      message: 'success',
    };
  }
}
export { UpdateEpisodeUseCase };
