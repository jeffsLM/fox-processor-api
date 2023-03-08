import { FindManyOptions } from 'typeorm';
import { inject, injectable } from 'tsyringe';

import { FoxAnime } from '../../entities/FoxAnime';
import { IFoxAnimeRepository } from '../../repositories/IFoxAnimeRepository';

@injectable()
class ListManyAnimeAnyTermUseCase {
  constructor(
    @inject('FoxAnimeRepository')
    private foxAnimeRepository: IFoxAnimeRepository
  ) {}

  async execute(conditions: FindManyOptions<FoxAnime>): Promise<FoxAnime[]> {
    const animeAlreadyExists = await this.foxAnimeRepository.findAll(conditions);

    return animeAlreadyExists;
  }
}
export { ListManyAnimeAnyTermUseCase };
