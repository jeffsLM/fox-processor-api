import { inject, injectable } from 'tsyringe';
import { FindManyOptions } from 'typeorm';

import { FoxEpisode } from '../../entities/FoxEpisode';
import { IFoxEpisodeRepository } from '../../repositories/IFoxEpisodeRepository';

@injectable()
class ListEpisodeAnyTermUseCase {
  constructor(
    @inject('FoxEpisodeRepository')
    private foxEpisodeRepository: IFoxEpisodeRepository
  ) {}

  async execute(conditions: FindManyOptions<FoxEpisode>): Promise<FoxEpisode[]> {
    const episodeAlreadyExists = await this.foxEpisodeRepository.find(conditions);

    return episodeAlreadyExists;
  }
}
export { ListEpisodeAnyTermUseCase };
