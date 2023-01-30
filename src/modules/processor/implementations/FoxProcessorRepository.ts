import { getRepository, Repository } from 'typeorm';

import { ICreateFoxProcessorDTO } from '../dtos/ICreateFoxProcessorDTO';
import { FoxProcessor } from '../entities/FoxProcessor';
import { IFoxProcessorRepository } from '../repositories/IFoxProcessorRepository';

class FoxProcessorRepository implements IFoxProcessorRepository {
  private repository: Repository<FoxProcessor>;

  constructor() {
    this.repository = getRepository(FoxProcessor);
  }

  async create({
    universal_anime_id,
    integration_service,
    key,
    last_version,
    episode,
    attempt,
    status,
    description,
    resolution,
    created_at,
  }: ICreateFoxProcessorDTO): Promise<void> {
    const data = {
      universal_anime_id,
      integration_service,
      key,
      last_version,
      episode,
      attempt,
      status,
      description,
      resolution,
      created_at,
    };

    const processor_id = this.repository.create(data);

    await this.repository.insert(processor_id);
  }
}

export { FoxProcessorRepository };
