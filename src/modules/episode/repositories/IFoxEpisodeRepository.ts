import { FindManyOptions } from 'typeorm';
import { ICreateFoxEpisodeDTO } from '../dtos/ICreateFoxEpisodeDTO';
import { FoxEpisode } from '../entities/FoxEpisode';

interface IFoxEpisodeRepository {
  create(data: ICreateFoxEpisodeDTO): Promise<void>;
  save(data: ICreateFoxEpisodeDTO): Promise<void>;
  findEpisodeByUniversalAnimeIdAndEpisode(
    universal_anime_id: string,
    episode: number
  ): Promise<FoxEpisode[]>;
  findAllEpisodesByUniversalAnimeId(universal_anime_id: string): Promise<FoxEpisode[]>;
  find(conditions: FindManyOptions<FoxEpisode>): Promise<FoxEpisode[]>;
}

export { IFoxEpisodeRepository };
