import { getRepository, Repository } from 'typeorm';

import { ICreateFoxUserHistoryDTO } from '../dtos/ICreateFoxUserHistoryDTO';
import { FoxUserHistory } from '../entities/FoxUserHistory';
import { IFoxUserHistoryRepository } from '../repositories/IFoxUserHistoryRepository';

class FoxUserHistoryRepository implements IFoxUserHistoryRepository {
  private repository: Repository<FoxUserHistory>;

  constructor() {
    this.repository = getRepository(FoxUserHistory);
  }

  async create({
    universal_anime_id,
    key,
    user,
    episode,
    watched_at,
    last_viewed_at,
    max_duration,
    progress,
  }: ICreateFoxUserHistoryDTO): Promise<void> {
    const data = {
      universal_anime_id,
      key,
      user,
      episode,
      watched_at,
      last_viewed_at,
      max_duration,
      progress,
    };

    const epsode_id = this.repository.create(data);

    await this.repository.insert(epsode_id);
  }

  async findByUserId(user: string): Promise<FoxUserHistory[]> {
    const episodeinfo = await this.repository.find({
      where: { user: user },
      order: { last_viewed_at: 'DESC' },
    });
    return episodeinfo;
  }
}

export { FoxUserHistoryRepository };
