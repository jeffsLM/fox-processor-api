import { inject, injectable } from 'tsyringe';

import { ICreateFoxQueueDTO } from '../../dtos/ICreateFoxQueueDTO';
import { IFoxQueueRepository } from '../../repositories/IFoxQueueRepository';

interface IResponseObject {
  created: boolean;
  message: string;
}

@injectable()
class ProcessQueueByFireProviderUseCase {
  constructor(
    @inject('FoxQueueRepository')
    private foxQueueRepository: IFoxQueueRepository
  ) {}

  async execute({
    term,
    key,
    process,
    created_at,
    updated_at,
  }: ICreateFoxQueueDTO): Promise<IResponseObject> {
    await this.foxQueueRepository.create({
      term,
      key,
      process,
      created_at,
      updated_at,
    });

    return {
      created: true,
      message: 'success',
    };
  }
}
export { ProcessQueueByFireProviderUseCase };
