import { inject, injectable } from 'tsyringe';

import { FoxAnime } from '../../entities/FoxAnime';
import { IFoxAnimeRepository } from '../../repositories/IFoxAnimeRepository';

@injectable()
class HttpsListLastAnimeUseCase {
  constructor(
    @inject('FoxAnimeRepository')
    private foxAnimeRepository: IFoxAnimeRepository
  ) {}

  async execute(): Promise<FoxAnime[]> {
    const animeAlreadyExists = await this.foxAnimeRepository.findAll({
      take: 20,
      order: {
        created_at: 'DESC',
      },
    });

    return animeAlreadyExists;
  }
}
export { HttpsListLastAnimeUseCase };
