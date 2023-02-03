import { aPlus } from '../../../../service/aPlus';

type IData = {
  video_id: string;
  category_id: string;
  title: string;
};

interface IProviderPlusEpisode {
  integration_episode_id: string;
  integration_id: string;
  title: string;
  episode: string;
}

export const GetValidFireEpisode = async (
  integration_id: string
): Promise<IProviderPlusEpisode[]> => {
  let animeDataFormated: IProviderPlusEpisode[] = [];
  await aPlus
    .get(`play-api.php?cat_id=${integration_id}`)
    .then((e) => {
      e.data.map((episode: IData) => {
        animeDataFormated.push({
          integration_episode_id: episode.video_id,
          integration_id: episode.video_id,
          title: episode.title.substring(0, episode.title.length - 2),
          episode: episode.title.substring(episode.title.length - 2, episode.title.length),
        });
      });
    })
    .catch(() => console.error('error', integration_id));

  return animeDataFormated;
};
