import { container } from 'tsyringe';
import { Request, Response } from 'express';

import { HttpsCreateQueueUseCase } from './HttpsCreateQueueUseCase';

class HttpsCreateQueueController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { term, process, created_at, updated_at } = request.body;

    const createUserUseCase = container.resolve(HttpsCreateQueueUseCase);

    const result = await createUserUseCase.execute({
      term,
      process,
      created_at,
      updated_at,
    });

    return response.status(201).json(result).send();
  }
}

export { HttpsCreateQueueController };
