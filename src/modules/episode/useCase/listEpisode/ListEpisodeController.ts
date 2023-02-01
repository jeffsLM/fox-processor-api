import { container } from 'tsyringe';

import { ListEpisodeUseCase } from './ListEpisodeUseCase';
import { ICreateFoxEpisodeDTO } from '../../dtos/ICreateFoxEpisodeDTO';

interface IRequestObject {
  universal_anime_id: string;
  episode: number;
}

class ListEpisodeController {
  async handle(data: IRequestObject): Promise<ICreateFoxEpisodeDTO[]> {
    const { universal_anime_id, episode } = data;

    const listCharacterUserUseCase = container.resolve(ListEpisodeUseCase);

    const list = await listCharacterUserUseCase.execute({
      universal_anime_id,
      episode,
    });

    return list;
  }
}

export { ListEpisodeController };
