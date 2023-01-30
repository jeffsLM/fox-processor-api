import { container } from 'tsyringe';

import { ICreateFoxUserHistoryDTO } from '../../dtos/ICreateFoxUserHistoryDTO';
import { ListUserHistoryUseCase } from './ListUserHistoryUseCase';

interface IRequest {
  user: string;
}

class ListUserHistoryController {
  async handle(data: IRequest): Promise<ICreateFoxUserHistoryDTO[]> {
    const { user } = data;

    const listUserHistoryUseCase = container.resolve(ListUserHistoryUseCase);

    const list = await listUserHistoryUseCase.execute({
      user,
    });

    return list;
  }
}

export { ListUserHistoryController };
