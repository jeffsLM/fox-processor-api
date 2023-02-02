import { Request, Response } from 'express';

import { ListQueueController } from '../listQueue/ListQueueController';
import { GenerateUniversalAnimeId } from '../../../anime/helpers/GenerateUniversalAnimeId';
import { CreateAnimeController } from '../../../anime/useCase/createAnime/CreateAnimeController';
import { ProviderFireAnimeInfo } from '../../helpers/ProviderFireAnimeInfo';
import { AnimeIsValidToProcess } from '../../../anime/helpers/AnimeIsValidToProcess';
import { GetLastEpisodeIntegrateByAnimeId } from '../../../episode/helpers/GetLastEpisodeIntegrateByAnimeId';
import { Logger } from '../../../processor/helpers/Logger';

class ProcessQueueByFireProviderController {
  async handle(_: Request, response: Response): Promise<Response> {
    const listQueueController = new ListQueueController();
    const generateUniversalAnimeId = new GenerateUniversalAnimeId();
    const providerFireAnimeInfo = new ProviderFireAnimeInfo();
    const createAnimeController = new CreateAnimeController();
    const animeIsValidToProcess = new AnimeIsValidToProcess();
    const getLastEpisodeIntegrateByAnimeId = new GetLastEpisodeIntegrateByAnimeId();
    const logger = new Logger();

    const listAnime = await listQueueController.handle({ where: { process: 'N' } });
    const queueToProcess = await providerFireAnimeInfo.execute(listAnime);

    queueToProcess.map(async (animeQueue) => {
      const animeInfo = await generateUniversalAnimeId.execute({ title: animeQueue.title });

      if (animeInfo.created) {
        await createAnimeController.handle({
          universal_anime_id: animeInfo.universal_anime_id,
          attempts_to_cancel_updates: 3,
          integration_service: 'FIRE_' + animeInfo.universal_anime_id,
          image: 'https://animefire.net/img/animes/' + animeQueue.image + '?v=2',
          resume: '',
          updated_at: new Date(),
          status: '',
          status_describe: '',
          ...animeQueue,
        });
      }

      const animeIsValid = await animeIsValidToProcess.execute({
        universal_anime_id: animeInfo.universal_anime_id,
      });

      if (!animeIsValid) return;

      const lastEpisode = await getLastEpisodeIntegrateByAnimeId.execute({
        universal_anime_id: animeInfo.universal_anime_id,
      });

      lastEpisode;
    });

    return response.status(201).json(queueToProcess).send();
  }
}

export { ProcessQueueByFireProviderController };
