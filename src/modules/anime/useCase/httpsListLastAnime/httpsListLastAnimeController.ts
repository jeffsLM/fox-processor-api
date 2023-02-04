import { container } from 'tsyringe';
import { Request, Response } from 'express';

import { HttpsListLastAnimeUseCase } from './httpsListLastAnimeUseCase';

class HttpsListLastAnimeController {
  async handle(_: Request, response: Response): Promise<Response> {
    const httpsListLastAnimeUseCase = container.resolve(HttpsListLastAnimeUseCase);

    const list = await httpsListLastAnimeUseCase.execute();

    return response.status(200).json(list).send();
  }
}

export { HttpsListLastAnimeController };
