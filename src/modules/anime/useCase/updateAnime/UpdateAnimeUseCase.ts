import { inject, injectable } from 'tsyringe';
import { IFoxAnimeRepository } from '../../repositories/IFoxAnimeRepository';
import { ICreateFoxAnimeDTO } from '../../dtos/ICreateFoxAnimeDTO';

interface IResponseObject {
  created: boolean;
  message: string;
}

@injectable()
class UpdateAnimeUseCase {
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

    if (!animeAlreadyExists) {
      return {
        created: false,
        message: 'Anime not already exists',
      };
    }

    await this.foxAnimeRepository.save({
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
      message: 'Success',
    };
  }
}
export { UpdateAnimeUseCase };
