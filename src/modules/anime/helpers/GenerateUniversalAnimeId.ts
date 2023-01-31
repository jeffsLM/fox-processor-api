import { v4 as uuidV4 } from 'uuid';
import { GetUniversalIdByTitle } from './GetUniversalIdByTitle';

interface IDataRequest {
  title: string;
}

interface IReturn {
  created: boolean;
  universal_anime_id: string;
}

class GenerateUniversalAnimeId {
  async execute(data: IDataRequest): Promise<IReturn> {
    const { title } = data;
    const getUniversalIdByTitle = new GetUniversalIdByTitle();
    const animeData = await getUniversalIdByTitle.execute({ title });

    if (animeData.exists) {
      return { universal_anime_id: animeData.universal_anime_id, created: false };
    }
    return { universal_anime_id: uuidV4(), created: true };
  }
}

export { GenerateUniversalAnimeId };
