import { GetInfoAnimeByUniversalAnimeId } from './GetInfoAnimeByUniversalAnimeId';
import { UpdateAnimeController } from '../useCase/updateAnime/UpdateAnimeController';

interface IDataRequest {
  universal_anime_id: string;
}

class ValidateAttempAndRemove {
  async execute(data: IDataRequest): Promise<boolean> {
    const { universal_anime_id } = data;
    const getInfoAnime = new GetInfoAnimeByUniversalAnimeId();
    const updateAnimeController = new UpdateAnimeController();

    const animeData = await getInfoAnime.execute({
      universal_anime_id,
    });

    const lastAnimeFinded = animeData.at(-1);

    const lastUpdated = new Date(lastAnimeFinded.updated_at);
    const today = new Date();
    const outdated = new Date(lastUpdated.setDate(today.getDate() + 7));

    const isValidToRemoveAttemp = today >= outdated;

    if (isValidToRemoveAttemp)
      await updateAnimeController.handle({
        universal_anime_id: lastAnimeFinded.universal_anime_id,
        integration_service: lastAnimeFinded.integration_service,
        integration_id: lastAnimeFinded.integration_id,
        title: lastAnimeFinded.title,
        alternative_name: lastAnimeFinded.alternative_name,
        sub: lastAnimeFinded.sub,
        resume: lastAnimeFinded.resume,
        rateing: lastAnimeFinded.rateing,
        image: lastAnimeFinded.image,
        created_at: lastAnimeFinded.created_at,
        updated_at: new Date(),
        status: lastAnimeFinded.status,
        status_describe: lastAnimeFinded.status_describe,
        attempts_to_cancel_updates: lastAnimeFinded.attempts_to_cancel_updates - 1,
      });

    return isValidToRemoveAttemp;
  }
}

export { ValidateAttempAndRemove };
