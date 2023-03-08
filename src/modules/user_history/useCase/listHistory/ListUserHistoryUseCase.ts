import { inject, injectable } from 'tsyringe';

import { FoxUserHistory } from '../../entities/FoxUserHistory';
import { IFoxUserHistoryRepository } from '../../repositories/IFoxUserHistoryRepository';

interface IRequest {
  user: string;
}

@injectable()
class ListUserHistoryUseCase {
  constructor(
    @inject('FoxUserHistoryRepository')
    private foxAnimeRepository: IFoxUserHistoryRepository
  ) {}

  async execute({ user }: IRequest): Promise<FoxUserHistory[]> {
    const historyUser = await this.foxAnimeRepository.findByUserId(user);

    return historyUser;
  }
}
export { ListUserHistoryUseCase };
