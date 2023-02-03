import { inject, injectable } from 'tsyringe';

import { ICreateFoxAnimeDTO } from '../../dtos/ICreateFoxAnimeDTO';
import { IFoxAnimeRepository } from '../../repositories/IFoxAnimeRepository';

interface IResponseObject {
  created: boolean;
  message: string;
}

@injectable()
class CreateAnimeUseCase {
  constructor(
    @inject('FoxAnimeRepository')
    private foxAnimeRepository: IFoxAnimeRepository
  ) {}

  async execute({
    universal_anime_id,
    integration_service,
    integration_id,
    title,
    alternative_name,
    sub,
    resume,
    rateing,
    image,
    updated_at,
    status,
    status_describe,
  }: ICreateFoxAnimeDTO): Promise<IResponseObject> {
    const animeAlreadyExists = await this.foxAnimeRepository.findByUniversalAnimeId(
      universal_anime_id
    );

    if (animeAlreadyExists.length > 0) {
      return {
        created: false,
        message: 'Anime already exists',
      };
    }

    await this.foxAnimeRepository.create({
      universal_anime_id,
      integration_service,
      integration_id,
      title,
      alternative_name,
      sub,
      resume,
      rateing,
      image,
      updated_at,
      status,
      status_describe,
    });

    return {
      created: true,
      message: 'success',
    };
  }
}
export { CreateAnimeUseCase };
