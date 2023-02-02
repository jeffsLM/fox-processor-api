import { ICreateFoxQueueDTO } from '../dtos/ICreateFoxQueueDTO';
import { DefineFireObjectKeys } from '../helpers/DefineFireObjectKeys';
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
    data.map(async (anime) => {
      const animeData = await GetValidFireAnimes(anime.term);
      const formatArrayToObject = animeData.map((anime) => Object.assign({}, anime));

      const animeObjectRenamedKeys = DefineFireObjectKeys(formatArrayToObject);
      animeObjectRenamedKeys.map((item: IProviderFireAnimeInfo) => animeValidData.push(item));
    });

    return animeValidData;
  }
}

export { ProviderFireAnimeInfo };
