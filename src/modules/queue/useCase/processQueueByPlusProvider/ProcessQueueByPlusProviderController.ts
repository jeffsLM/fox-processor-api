import { ILike, Not } from 'typeorm';

import { ListEpisodeAnyTermController } from '../../../episode/useCase/listEpisodeAnyTerm/ListEpisodeAnyTermController';

import { ProviderPlusAnimeInfo } from '../../helpers/PlusProvider/ProviderPlusAnimeInfo';
import { ProviderPlusEpisodeInfo } from '../../helpers/PlusProvider/ProviderPlusEpisodeInfo';

import { AnimeIsValidToProcess } from '../../../anime/helpers/AnimeIsValidToProcess';

class ProcessQueueByPlusProviderController {
  async handle(): Promise<void> {
    const providerPlusAnimeInfo = new ProviderPlusAnimeInfo();
    const providerPlusEpisodeInfo = new ProviderPlusEpisodeInfo();
    const animeIsValidToProcess = new AnimeIsValidToProcess();

    const listEpisodeAnyTermController = new ListEpisodeAnyTermController();

    const episodeList = await listEpisodeAnyTermController.handle({
      where: { url: ILike(`%google%`) },
    });
    // console.log('episodeList', episodeList);

    const episodesToReprocess = await providerPlusAnimeInfo.execute(episodeList);
    // console.log('episodesToReprocess', episodesToReprocess);

    await Promise.all(
      episodesToReprocess.map(async (animeQueue) => {
        const animeIsValid = await animeIsValidToProcess.execute({
          universal_anime_id: animeQueue.universal_anime_id,
        });

        if (!animeIsValid) return;

        await providerPlusEpisodeInfo.execute(animeQueue);
      })
    );
  }
}

export { ProcessQueueByPlusProviderController };
