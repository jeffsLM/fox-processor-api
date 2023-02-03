import { aFire } from '../../../../service/aFire';

type IData = {
  src: string;
  label: string;
};

interface IFireObjectKeys {
  data: IData[];
  response: {
    status: string;
    text: string;
  };
}

export const GetValidFireEpisode = async (
  integration_id: string,
  episode: number
): Promise<IFireObjectKeys> => {
  const formatedIntegrationId = integration_id.replace('-todos-os-episodios', '');
  var newAnimeData: IFireObjectKeys;

  newAnimeData = await aFire
    .post(
      `video/${formatedIntegrationId}/${episode}`,
      {},
      {
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS)',
          charset: 'utf-8',
        },
      }
    )
    .then((e) => e.data)
    .catch(() => console.error('error', formatedIntegrationId));

  return newAnimeData;
};
