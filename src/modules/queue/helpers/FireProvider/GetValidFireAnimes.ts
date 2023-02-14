import { aFire } from '../../../../service/aFire';
import { DefineFireObjectKeys } from '../../helpers/FireProvider/DefineFireObjectKeys';
interface IFireObjectKeys {
  '0': string;
  '1': string;
  '2': string;
  '3': string;
  '4': string;
  '5': string;
  '6': string;
}

interface IProviderFireAnimeInfo {
  title: string;
  image: string;
  rateing: number;
  sub: string;
  alternative_name: string;
  integration_id: string;
  date: Date;
}

export const GetValidFireAnimes = async (term: string) => {
  var newAnimeData: IProviderFireAnimeInfo[] = [];
  await Promise.all([
    await aFire
      .post(
        'proc/quicksearch',
        { word: term },
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS)',
          },
        }
      )
      .then((e: any) => {
        const animeData: IFireObjectKeys[] = e.data;
        const formatArrayToObject = animeData.map((anime) => Object.assign({}, anime));
        const animeObjectRenamedKeys = DefineFireObjectKeys(formatArrayToObject);
        animeObjectRenamedKeys.map((item: IProviderFireAnimeInfo) => newAnimeData.push(item));

        return newAnimeData;
      })
      .catch(() => {
        // console.log('ERRO', term);
      }),
  ]);

  return newAnimeData;
};
