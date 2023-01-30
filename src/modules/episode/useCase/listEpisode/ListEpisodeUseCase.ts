import { inject, injectable } from 'tsyringe';

import { FoxEpisode } from '../../entities/FoxEpisode';
import { IFoxEpisodeRepository } from '../../repositories/IFoxEpisodeRepository';

interface IRequest {
  universal_anime_id: string;
  episode: number;
}

@injectable()
class ListEpisodeUseCase {
  constructor(
    @inject('FoxEpisodeRepository')
    private foxEpisodeRepository: IFoxEpisodeRepository
  ) {}

  async execute({ universal_anime_id, episode }: IRequest): Promise<FoxEpisode[]> {
    const episodeAlreadyExists = await this.foxEpisodeRepository.findEpisodeByUniversalAnimeIdAndEpisode(
      universal_anime_id,
      episode
    );

    return episodeAlreadyExists;
  }
}
export { ListEpisodeUseCase };
