import { ICreateFoxQueueDTO } from '../dtos/ICreateFoxQueueDTO';
import { GetValidFireAnimes } from '../helpers/GetValidFireAnimes';

interface IProviderFireAnimeInfo {
  title: string;
  image: string;
  rateing: number;
  sub: string;
  alternative_name: string;
  integration_id: string;
  date: Date;
}

class ProviderFireAnimeInfo {
  async execute(data: ICreateFoxQueueDTO[]): Promise<IProviderFireAnimeInfo[]> {
    let animeValidData: IProviderFireAnimeInfo[] = [];
    await Promise.all(
      data.map(async (anime) => {
        const animeData: any = await GetValidFireAnimes(anime.term);
        console.log('animeData', animeData);
        if (animeData && animeData.length > 0) {
          return animeValidData.push(animeData[0]);
        }
      })
    );
    return animeValidData;
  }
}

export { ProviderFireAnimeInfo };
