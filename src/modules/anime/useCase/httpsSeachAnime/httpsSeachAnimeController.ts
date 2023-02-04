import { container } from 'tsyringe';
import { Request, Response } from 'express';

import { HttpsSeachAnimeUseCase } from './httpsSeachAnimeUseCase';

class HttpsSeachAnimeController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { search } = request.body;
    const httpsSeachAnimeUseCase = container.resolve(HttpsSeachAnimeUseCase);

    const list = await httpsSeachAnimeUseCase.execute(search);

    return response.status(200).json(list).send();
  }
}

export { HttpsSeachAnimeController };
