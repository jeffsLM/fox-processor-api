import { ICreateFoxAnimeDTO } from '../dtos/ICreateFoxAnimeDTO';
import { FoxAnime } from '../entities/FoxAnime';

interface IFoxAnimeRepository {
  create(data: ICreateFoxAnimeDTO): Promise<void>;
  save(data: ICreateFoxAnimeDTO): Promise<void>;
  findByUniversalAnimeId(universal_anime_id: string): Promise<FoxAnime[]>;
}

export { IFoxAnimeRepository };
