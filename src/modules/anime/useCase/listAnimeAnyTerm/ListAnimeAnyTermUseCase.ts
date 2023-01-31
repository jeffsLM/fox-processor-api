import { FindOneOptions } from 'typeorm';
import { inject, injectable } from 'tsyringe';

import { FoxAnime } from '../../entities/FoxAnime';
import { IFoxAnimeRepository } from '../../repositories/IFoxAnimeRepository';

@injectable()
class ListAnimeAnyTermUseCase {
  constructor(
    @inject('FoxAnimeRepository')
    private foxAnimeRepository: IFoxAnimeRepository
  ) {}

  async execute(conditions: FindOneOptions<FoxAnime>): Promise<FoxAnime> {
    const animeAlreadyExists = await this.foxAnimeRepository.find(conditions);

    return animeAlreadyExists;
  }
}
export { ListAnimeAnyTermUseCase };
