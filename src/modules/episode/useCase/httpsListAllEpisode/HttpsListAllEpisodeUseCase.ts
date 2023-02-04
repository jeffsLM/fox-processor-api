import { inject, injectable } from 'tsyringe';
import { ILike, Not } from 'typeorm';

import { FoxEpisode } from '../../entities/FoxEpisode';
import { IFoxEpisodeRepository } from '../../repositories/IFoxEpisodeRepository';

interface IRequest {
  universal_anime_id: string;
}

@injectable()
class HttpsListAllEpisodeUseCase {
  constructor(
    @inject('FoxEpisodeRepository')
    private foxEpisodeRepository: IFoxEpisodeRepository
  ) {}

  async execute({ universal_anime_id }: IRequest): Promise<FoxEpisode[]> {
    const allEpisodeAlreadyExists = await this.foxEpisodeRepository.find({
      where: { universal_anime_id: universal_anime_id, url: Not(ILike('%google%')) },
      order: { episode: 'ASC' },
    });

    return allEpisodeAlreadyExists;
  }
}
export { HttpsListAllEpisodeUseCase };
