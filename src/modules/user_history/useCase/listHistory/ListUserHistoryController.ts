import { container } from 'tsyringe';
import { FoxUserHistory } from '../../entities/FoxUserHistory';

import { ListUserHistoryUseCase } from './ListUserHistoryUseCase';

interface IRequest {
  user: string;
}

class ListUserHistoryController {
  async handle({ user }: IRequest): Promise<FoxUserHistory[]> {
    const listUserHistoryUseCase = container.resolve(ListUserHistoryUseCase);

    const list = await listUserHistoryUseCase.execute({
      user,
    });

    return list;
  }
}

export { ListUserHistoryController };
