import { container } from 'tsyringe';

import { HttpsListAllEpisodeUseCase } from './HttpsListAllEpisodeUseCase';
import { ICreateFoxEpisodeDTO } from '../../dtos/ICreateFoxEpisodeDTO';

interface IRequestObject {
  universal_anime_id: string;
}

class HttpsListAllEpisodeController {
  async handle(data: IRequestObject): Promise<ICreateFoxEpisodeDTO[]> {
    const { universal_anime_id } = data;

    const httpsListAllEpisodeUseCase = container.resolve(HttpsListAllEpisodeUseCase);

    const list = await httpsListAllEpisodeUseCase.execute({
      universal_anime_id,
    });

    return list;
  }
}

export { HttpsListAllEpisodeController };
