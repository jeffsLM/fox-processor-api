import { container } from 'tsyringe';

import { ListAllEpisodeUseCase } from './ListAllEpisodeUseCase';
import { ICreateFoxEpisodeDTO } from '../../dtos/ICreateFoxEpisodeDTO';

interface IRequestObject {
  universal_anime_id: string;
}

class ListAllItensController {
  async handle(data: IRequestObject): Promise<ICreateFoxEpisodeDTO[]> {
    const { universal_anime_id } = data;

    const listCharacterUserUseCase = container.resolve(ListAllEpisodeUseCase);

    const list = await listCharacterUserUseCase.execute({
      universal_anime_id,
    });

    return list;
  }
}

export { ListAllItensController };
