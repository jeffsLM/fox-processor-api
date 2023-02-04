import { FindManyOptions, FindOneOptions } from 'typeorm';
import { ICreateFoxAnimeDTO } from '../dtos/ICreateFoxAnimeDTO';
import { FoxAnime } from '../entities/FoxAnime';

interface IFoxAnimeRepository {
  create(data: ICreateFoxAnimeDTO): Promise<void>;
  save(data: ICreateFoxAnimeDTO): Promise<void>;
  findByUniversalAnimeId(universal_anime_id: string): Promise<FoxAnime[]>;
  find(conditions: FindOneOptions<FoxAnime>): Promise<FoxAnime>;
  findAll(conditions: FindManyOptions<FoxAnime>): Promise<FoxAnime[]>;
}

export { IFoxAnimeRepository };
