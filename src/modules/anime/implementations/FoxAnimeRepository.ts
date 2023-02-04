import { getRepository, Repository, FindOneOptions, FindManyOptions } from 'typeorm';

import { ICreateFoxAnimeDTO } from '../dtos/ICreateFoxAnimeDTO';
import { FoxAnime } from '../entities/FoxAnime';
import { IFoxAnimeRepository } from '../repositories/IFoxAnimeRepository';

class FoxAnimeRepository implements IFoxAnimeRepository {
  private repository: Repository<FoxAnime>;

  constructor() {
    this.repository = getRepository(FoxAnime);
  }

  async create({
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
  }: ICreateFoxAnimeDTO): Promise<void> {
    const data = {
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
    };

    const anime_id = this.repository.create(data);

    await this.repository.insert(anime_id);
  }

  async save({
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
    attempts_to_cancel_updates,
  }: ICreateFoxAnimeDTO): Promise<void> {
    await this.repository.update(
      {
        universal_anime_id,
      },
      {
        integration_id,
        integration_service,
        title,
        alternative_name,
        sub,
        resume,
        rateing,
        image,
        updated_at,
        status,
        status_describe,
        attempts_to_cancel_updates,
      }
    );
  }

  async findByUniversalAnimeId(universal_anime_id: string): Promise<FoxAnime[]> {
    const animeInfo = await this.repository.find({ universal_anime_id });
    return animeInfo;
  }

  async find(conditions: FindOneOptions<FoxAnime>): Promise<FoxAnime> {
    const animeInfo = await this.repository.findOne(conditions);
    return animeInfo;
  }
  async findAll(conditions: FindManyOptions<FoxAnime>): Promise<FoxAnime[]> {
    const animeInfo = await this.repository.find(conditions);
    return animeInfo;
  }
}

export { FoxAnimeRepository };
