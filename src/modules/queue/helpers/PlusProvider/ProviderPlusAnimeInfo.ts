import { ICreateFoxQueueDTO } from '../../dtos/ICreateFoxQueueDTO';
import { GetValidPlusAnimes } from '../PlusProvider/GetValidPlusAnimes';

interface IProviderFireAnimeInfo {
  integration_id: string;
  title: string;
  image: string;
}

class ProviderFireAnimeInfo {
  async execute(data: ICreateFoxQueueDTO[]): Promise<IProviderFireAnimeInfo[]> {
    let animeValidData: IProviderFireAnimeInfo[] = [];
    await Promise.all(
      data.map(async (anime) => {
        const animeData: any = await GetValidPlusAnimes(anime.term);
        if (animeData && animeData.length > 0) {
          animeData.map((item: IProviderFireAnimeInfo) => animeValidData.push(item));
        }
      })
    );
    return animeValidData;
  }
}

export { ProviderFireAnimeInfo };
