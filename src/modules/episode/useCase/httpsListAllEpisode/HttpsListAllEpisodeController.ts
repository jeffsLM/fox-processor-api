import { container } from 'tsyringe';
import { Response, Request } from 'express';

import { HttpsListAllEpisodeUseCase } from './HttpsListAllEpisodeUseCase';
import { ICreateFoxEpisodeDTO } from '../../dtos/ICreateFoxEpisodeDTO';

interface IRequestObject {
  universal_anime_id: string;
}

class HttpsListAllEpisodeController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { universal_anime_id } = request.body;

    const httpsListAllEpisodeUseCase = container.resolve(HttpsListAllEpisodeUseCase);

    const list = await httpsListAllEpisodeUseCase.execute({
      universal_anime_id,
    });

    return response.status(200).json(list).send();
  }
}

export { HttpsListAllEpisodeController };
