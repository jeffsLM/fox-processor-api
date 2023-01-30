import { inject, injectable } from 'tsyringe';

import { ICreateFoxUserHistoryDTO } from '../../dtos/ICreateFoxUserHistoryDTO';
import { IFoxUserHistoryRepository } from '../../repositories/IFoxUserHistoryRepository';

interface IResponseObject {
  created: boolean;
  message: string;
}

@injectable()
class CreateUserHistoryUseCase {
  constructor(
    @inject('FoxUserHistoryRepository')
    private foxUserHistoryRepository: IFoxUserHistoryRepository
  ) {}

  async execute({
    universal_anime_id,
    key,
    user,
    episode,
    watched_at,
    last_viewed_at,
    max_duration,
    progress,
  }: ICreateFoxUserHistoryDTO): Promise<IResponseObject> {
    await this.foxUserHistoryRepository.create({
      universal_anime_id,
      key,
      user,
      episode,
      watched_at,
      last_viewed_at,
      max_duration,
      progress,
    });

    return {
      created: true,
      message: 'success',
    };
  }
}
export { CreateUserHistoryUseCase };
