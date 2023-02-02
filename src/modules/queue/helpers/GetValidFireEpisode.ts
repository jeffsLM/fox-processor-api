import { aFire } from '../../../service/aFire';

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

export const GetValidFireEpisode = async (integration_id: string, episode: number) => {
  const formatedIntegrationId = integration_id.replace('-todos-os-episodios', '');

  const newAnimeData: IFireObjectKeys[] = await aFire
    .post(
      `proc/video/${formatedIntegrationId}/${episode}`,
      {},
      {
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS)',
          charset: 'utf-8',
        },
      }
    )
    .then((e) => e.data);

  return newAnimeData;
};
