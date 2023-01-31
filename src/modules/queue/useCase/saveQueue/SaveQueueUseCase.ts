import { inject, injectable } from 'tsyringe';

import { IFoxQueueRepository } from '../../repositories/IFoxQueueRepository';
import { ICreateFoxQueueDTO } from '../../dtos/ICreateFoxQueueDTO';

interface IResponseObject {
  updated: boolean;
  message: string;
}

@injectable()
class ListQueueUseCase {
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
    const episodeAlreadyExists = await this.foxQueueRepository.find({ where: key });

    if (!episodeAlreadyExists) {
      return {
        updated: false,
        message: 'episode not exists',
      };
    }

    await this.foxQueueRepository.save({
      term,
      key,
      process,
      created_at,
      updated_at: new Date(),
    });

    return {
      updated: true,
      message: 'success',
    };
  }
}
export { ListQueueUseCase };
