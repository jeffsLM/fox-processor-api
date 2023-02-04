import { inject, injectable } from 'tsyringe';
import { ILike } from 'typeorm';

import { FoxAnime } from '../../entities/FoxAnime';
import { IFoxAnimeRepository } from '../../repositories/IFoxAnimeRepository';

@injectable()
class HttpsSeachAnimeUseCase {
  constructor(
    @inject('FoxAnimeRepository')
    private foxAnimeRepository: IFoxAnimeRepository
  ) {}

  async execute(search: string): Promise<FoxAnime[]> {
    const animeAlreadyExists = await this.foxAnimeRepository.findAll({
      where: { title: ILike(`%${search}%`) },
    });

    return animeAlreadyExists;
  }
}
export { HttpsSeachAnimeUseCase };
