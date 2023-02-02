import { aFire } from '../../../service/aFire';

interface IFireObjectKeys {
  '0': string;
  '1': string;
  '2': string;
  '3': string;
  '4': string;
  '5': string;
  '6': string;
}

export const GetValidFireAnimes = async (term: string) => {
  const newAnimeData: IFireObjectKeys[] = await aFire
    .post(
      'proc/quicksearch',
      {},
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          word: term,
        },
      }
    )
    .then((e) => e.data);

  return newAnimeData;
};
