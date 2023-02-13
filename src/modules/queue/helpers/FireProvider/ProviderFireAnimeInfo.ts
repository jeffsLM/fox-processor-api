import { ICreateFoxQueueDTO } from '../../dtos/ICreateFoxQueueDTO';
import { GetValidFireAnimes } from '../../helpers/FireProvider/GetValidFireAnimes';

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
        if (animeData && animeData.length > 0) {
          animeData.map((e: any) => {
            animeValidData.push(e);
          });
        }
      })
    );
    return animeValidData;
  }
}

export { ProviderFireAnimeInfo };
