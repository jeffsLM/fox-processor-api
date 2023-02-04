import { Request, Response } from 'express';

import { ListQueueController } from '../listQueue/ListQueueController';
import { SaveQueueController } from '../saveQueue/SaveQueueController';

import { ProviderFireAnimeInfo } from '../../helpers/FireProvider/ProviderFireAnimeInfo';
import { ProviderFireEpisodeInfo } from '../../helpers/FireProvider/ProviderFireEpisodeInfo';

import { GenerateUniversalAnimeId } from '../../../anime/helpers/GenerateUniversalAnimeId';
import { CreateAnimeController } from '../../../anime/useCase/createAnime/CreateAnimeController';
import { ListAnimeController } from '../../../anime/useCase/listAnime/ListAnimeController';
import { AnimeIsValidToProcess } from '../../../anime/helpers/AnimeIsValidToProcess';

import { Logger } from '../../../processor/helpers/Logger';

import { GetLastEpisodeIntegrateByAnimeId } from '../../../episode/helpers/GetLastEpisodeIntegrateByAnimeId';
import { CreateManyEpisodeController } from '../../../episode/useCase/createManyEpisode/CreateManyEpisodeController';

import { ProcessQueueByPlusProviderController } from '../processQueueByPlusProvider/ProcessQueueByPlusProviderController';

class ProcessQueueByFireProviderController {
  async handle(_: Request, response: Response): Promise<Response> {
    const listQueueController = new ListQueueController();
    const saveQueueController = new SaveQueueController();

    const providerFireAnimeInfo = new ProviderFireAnimeInfo();
    const providerFireEpisodeInfo = new ProviderFireEpisodeInfo();

    const createManyEpisodeController = new CreateManyEpisodeController();

    const generateUniversalAnimeId = new GenerateUniversalAnimeId();
    const createAnimeController = new CreateAnimeController();
    const listAnimeController = new ListAnimeController();
    const animeIsValidToProcess = new AnimeIsValidToProcess();

    const getLastEpisodeIntegrateByAnimeId = new GetLastEpisodeIntegrateByAnimeId();
    const processQueueByPlusProviderController = new ProcessQueueByPlusProviderController();

    const logger = new Logger();

    const listAnime = await listQueueController.handle({ where: { process: 'N' }, take: 5 });
    const queueToProcess = await providerFireAnimeInfo.execute(listAnime);

    await Promise.all(
      queueToProcess.map(async (animeQueue) => {
        const animeInfo = await generateUniversalAnimeId.execute({ title: animeQueue.title });
        if (animeInfo.created) {
          await createAnimeController.handle({
            universal_anime_id: animeInfo.universal_anime_id,
            attempts_to_cancel_updates: 3,
            integration_id: animeQueue.integration_id,
            integration_service: 'FIRE_' + animeInfo.universal_anime_id,
            image: 'https://animefire.net/img/animes/' + animeQueue.image + '?v=2',
            resume: '',
            updated_at: new Date(),
            status: '',
            status_describe: '',
            rateing: animeQueue.rateing.toString() === 'N/A' ? -1 : animeQueue.rateing,
            title: animeQueue.title,
            alternative_name: animeQueue.alternative_name,
            sub: animeQueue.sub,
          });
        }

        const animeIsValid = await animeIsValidToProcess.execute({
          universal_anime_id: animeInfo.universal_anime_id,
        });

        if (!animeIsValid) return;

        var lastEpisode = await getLastEpisodeIntegrateByAnimeId.execute({
          universal_anime_id: animeInfo.universal_anime_id,
        });

        const generalAnimeInfo = await listAnimeController.handle({
          universal_anime_id: animeInfo.universal_anime_id,
        });

        const animeToAdd = await providerFireEpisodeInfo.execute(
          generalAnimeInfo.at(-1),
          lastEpisode.episode + 1
        );

        if (animeToAdd.length === 0) {
          logger.execute({
            epData: { ...lastEpisode, episode: lastEpisode.episode++ },
            flag: 'not_found',
            universal_anime_id: animeInfo.universal_anime_id,
          });
        }

        createManyEpisodeController.handle(animeToAdd);
      })
    );

    listAnime.map(async (animeQueue) => {
      await saveQueueController.handle({
        process: 'S',
        created_at: animeQueue.created_at,
        key: animeQueue.key,
        term: animeQueue.term,
        updated_at: new Date(),
      });
    });

    await processQueueByPlusProviderController.handle();

    return response.status(201).json(queueToProcess).send();
  }
}

export { ProcessQueueByFireProviderController };
