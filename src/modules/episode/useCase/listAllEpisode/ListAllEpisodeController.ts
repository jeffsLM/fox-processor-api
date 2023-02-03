import { container } from 'tsyringe';

import { ListAllEpisodeUseCase } from './ListAllEpisodeUseCase';
import { ICreateFoxEpisodeDTO } from '../../dtos/ICreateFoxEpisodeDTO';

interface IRequestObject {
  universal_anime_id: string;
}

class ListAllEpisodeController {
  async handle(data: IRequestObject): Promise<ICreateFoxEpisodeDTO[]> {
    const { universal_anime_id } = data;

    const listAllEpisodeUseCase = container.resolve(ListAllEpisodeUseCase);

    const list = await listAllEpisodeUseCase.execute({
      universal_anime_id,
    });

    return list;
  }
}

export { ListAllEpisodeController };
