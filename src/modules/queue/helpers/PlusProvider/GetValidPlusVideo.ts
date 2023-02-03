import { aPlus } from '../../../../service/aPlus';

type IData = {
  video_id: string;
  category_id: string;
  title: string;
  location: string;
  locationsd: string;
};

interface IProviderPlusAnimeInfo {
  integration_episode_id: string;
  integration_id: string;
  title: string;
  resolution: string;
  url: string;
}

export const GetValidFireEpisode = async (video_id: string): Promise<IProviderPlusAnimeInfo[]> => {
  let newEpisodeData: IProviderPlusAnimeInfo[] = [];

  await aPlus
    .get(`play-api.php?episodios=${video_id}`)
    .then((e) => {
      e.data.map((episode: IData) => {
        newEpisodeData.push({
          integration_episode_id: episode.video_id,
          integration_id: episode.category_id,
          title: episode.title,
          resolution: '720p',
          url: episode.location,
        });
        newEpisodeData.push({
          integration_episode_id: episode.video_id,
          integration_id: episode.category_id,
          title: episode.title,
          resolution: '1080p',
          url: episode.locationsd,
        });
      });
    })
    .catch(() => console.error('error', video_id));

  return newEpisodeData;
};
