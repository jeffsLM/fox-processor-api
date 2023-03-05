import { inject, injectable } from 'tsyringe';

import { FoxAnime } from '../../entities/FoxAnime';
import { IFoxAnimeRepository } from '../../repositories/IFoxAnimeRepository';

@injectable()
class HttpsListAnimeUseCase {
  constructor(
    @inject('FoxAnimeRepository')
    private foxAnimeRepository: IFoxAnimeRepository
  ) {}

  async execute(): Promise<FoxAnime[]> {
    const animeAlreadyExists = await this.foxAnimeRepository.findAll({
      order: {
        title: 'ASC',
      },
    });

    return animeAlreadyExists;
  }
}
export { HttpsListAnimeUseCase };
