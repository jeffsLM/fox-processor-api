import { FindManyOptions, getRepository, Repository } from 'typeorm';

import { ICreateFoxEpisodeDTO } from '../dtos/ICreateFoxEpisodeDTO';
import { FoxEpisode } from '../entities/FoxEpisode';
import { IFoxEpisodeRepository } from '../repositories/IFoxEpisodeRepository';

class FoxEpisodeRepository implements IFoxEpisodeRepository {
  private repository: Repository<FoxEpisode>;

  constructor() {
    this.repository = getRepository(FoxEpisode);
  }

  async create({
    universal_anime_id,
    integration_service,
    integration_episode_id,
    episode,
    title,
    alternative_name,
    sub,
    resume,
    url,
    image,
    rateing,
    last_version,
    resolution,
    max_duration,
    updated_at,
  }: ICreateFoxEpisodeDTO): Promise<void> {
    const data = {
      universal_anime_id,
      integration_service,
      integration_episode_id,
      episode,
      title,
      alternative_name,
      sub,
      resume,
      url,
      image,
      rateing,
      last_version,
      resolution,
      max_duration,
      updated_at,
    };

    const epsode_id = this.repository.create(data);

    await this.repository.insert(epsode_id);
  }

  async createMany(data: ICreateFoxEpisodeDTO[]): Promise<void> {
    const epsode_id = this.repository.create(data);

    await this.repository.insert(epsode_id);
  }

  async save({
    universal_anime_id,
    integration_service,
    integration_episode_id,
    episode,
    title,
    alternative_name,
    sub,
    resume,
    url,
    image,
    rateing,
    last_version,
    resolution,
    max_duration,
    updated_at,
  }: ICreateFoxEpisodeDTO): Promise<void> {
    await this.repository.update(
      {
        universal_anime_id,
        integration_episode_id,
      },
      {
        integration_service,
        episode,
        title,
        alternative_name,
        sub,
        url,
        resume,
        image,
        rateing,
        last_version,
        resolution,
        max_duration,
        updated_at,
      }
    );
  }

  async findEpisodeByUniversalAnimeIdAndEpisode(
    universal_anime_id: string,
    episode: number
  ): Promise<FoxEpisode[]> {
    const episodeinfo = await this.repository.find({ where: { universal_anime_id, episode } });
    return episodeinfo;
  }

  async findAllEpisodesByUniversalAnimeId(universal_anime_id: string): Promise<FoxEpisode[]> {
    const episodeinfo = await this.repository.find({
      where: { universal_anime_id: universal_anime_id },
      order: {
        episode: 'ASC',
      },
    });
    return episodeinfo;
  }

  async find(conditions: FindManyOptions<FoxEpisode>): Promise<FoxEpisode[]> {
    const animeInfo = await this.repository.find(conditions);
    return animeInfo;
  }
}

export { FoxEpisodeRepository };
