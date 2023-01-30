import { inject, injectable } from 'tsyringe';

import { FoxEpisode } from '../../entities/FoxEpisode';
import { IFoxEpisodeRepository } from '../../repositories/IFoxEpisodeRepository';

interface IRequest {
  universal_anime_id: string;
}

@injectable()
class ListAllEpisodeUseCase {
  constructor(
    @inject('FoxEpisodeRepository')
    private foxEpisodeRepository: IFoxEpisodeRepository
  ) {}

  async execute({ universal_anime_id }: IRequest): Promise<FoxEpisode[]> {
    const allEpisodeAlreadyExists = await this.foxEpisodeRepository.findAllEpisodesByUniversalAnimeId(
      universal_anime_id
    );

    return allEpisodeAlreadyExists;
  }
}
export { ListAllEpisodeUseCase };
