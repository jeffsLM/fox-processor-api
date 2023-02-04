import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateUserHistoryUseCase } from './CreateUserHistoryUseCase';

class CreateUserHistoryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      universal_anime_id,
      key,
      user,
      episode,
      watched_at,
      last_viewed_at,
      max_duration,
      progress,
    } = request.body;

    const createUserUseCase = container.resolve(CreateUserHistoryUseCase);

    const result = await createUserUseCase.execute({
      universal_anime_id,
      key,
      user,
      episode,
      watched_at,
      last_viewed_at,
      max_duration,
      progress,
    });

    return response.status(201).json(result).send();
  }
}

export { CreateUserHistoryController };
