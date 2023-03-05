import { container } from 'tsyringe';
import { Request, Response } from 'express';

import { HttpsListAnimeUseCase } from './httpsListAnimeUseCase';

class HttpsListAnimeController {
  async handle(_: Request, response: Response): Promise<Response> {
    const httpsListAnimeUseCase = container.resolve(HttpsListAnimeUseCase);

    const list = await httpsListAnimeUseCase.execute();

    return response.status(200).json(list).send();
  }
}

export { HttpsListAnimeController };
