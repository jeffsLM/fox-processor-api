import { container } from 'tsyringe';
import { Request, Response } from 'express';

import { ListUserHistoryUseCase } from './ListUserHistoryUseCase';

class ListUserHistoryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { user } = request.body;

    const listUserHistoryUseCase = container.resolve(ListUserHistoryUseCase);

    const list = await listUserHistoryUseCase.execute({
      user,
    });

    return response.status(200).json(list).send();
  }
}

export { ListUserHistoryController };
