import { inject, injectable } from 'tsyringe';

import { ICreateFoxQueueDTO } from '../../dtos/ICreateFoxQueueDTO';
import { IFoxQueueRepository } from '../../repositories/IFoxQueueRepository';

import { ListQueueController } from '../listQueue/ListQueueController';

@injectable()
class PopulateByProviderQueueUseCase {
  constructor(
    @inject('FoxQueueRepository')
    private foxQueueRepository: IFoxQueueRepository
  ) {}

  async execute({ term, key, process, created_at, updated_at }: ICreateFoxQueueDTO): Promise<void> {
    const listQueueController = new ListQueueController();
    const queueExists = await listQueueController.handle({ where: { term: term, process: 'N' } });

    if (queueExists.length > 0) return;

    await this.foxQueueRepository.create({
      term,
      key,
      process,
      created_at,
      updated_at,
    });
  }
}
export { PopulateByProviderQueueUseCase };
