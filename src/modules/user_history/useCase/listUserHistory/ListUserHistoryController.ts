import { container } from 'tsyringe';
import { Request, Response } from 'express';

import { ProcessHistoryController } from '../ProcessHistory/ProcessHistoryController';

class ListUserHistoryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { user } = request.body;

    const processHistoryController = new ProcessHistoryController();

    const list = await processHistoryController.handle({ user: user });

    return response.status(200).json(list).send();
  }
}

export { ListUserHistoryController };
