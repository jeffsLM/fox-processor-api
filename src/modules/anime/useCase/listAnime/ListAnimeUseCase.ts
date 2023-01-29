import { inject, injectable } from 'tsyringe';

import { FoxAnime } from '../../entities/FoxAnime';
import { IFoxAnimeRepository } from '../../repositories/IFoxAnimeRepository';

interface IRequest {
  universal_anime_id: string;
}

@injectable()
class ListAnimeUseCase {
  constructor(
    @inject('FoxAnimeRepository')
    private foxAnimeRepository: IFoxAnimeRepository
  ) {}

  async execute({ universal_anime_id }: IRequest): Promise<FoxAnime[]> {
    const animeAlreadyExists = await this.foxAnimeRepository.findByUniversalAnimeId(
      universal_anime_id
    );

    return animeAlreadyExists;
  }
}
export { ListAnimeUseCase };
