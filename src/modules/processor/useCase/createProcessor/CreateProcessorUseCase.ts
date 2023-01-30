import { inject, injectable } from 'tsyringe';

import { ICreateFoxProcessorDTO } from '../../dtos/ICreateFoxProcessorDTO';
import { IFoxProcessorRepository } from '../../repositories/IFoxProcessorRepository';

interface IResponseObject {
  created: boolean;
  message: string;
}

@injectable()
class CreateProcessorUseCase {
  constructor(
    @inject('FoxProcessorRepository')
    private foxProcessorRepository: IFoxProcessorRepository
  ) {}

  async execute({
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
  }: ICreateFoxProcessorDTO): Promise<IResponseObject> {
    await this.foxProcessorRepository.create({
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
    });

    return {
      created: true,
      message: 'success',
    };
  }
}
export { CreateProcessorUseCase };
