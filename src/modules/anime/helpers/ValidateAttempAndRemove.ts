import { GetInfoAnimeByUniversalAnimeId } from './GetInfoAnimeByUniversalAnimeId';
import { UpdateSkillController } from '../useCase/updateAnime/UpdateAnimeController';

interface IDataRequest {
  universal_anime_id: string;
}

class ValidateAttempAndRemove {
  async execute(data: IDataRequest): Promise<boolean> {
    const { universal_anime_id } = data;
    const getInfoAnime = new GetInfoAnimeByUniversalAnimeId();
    const updateSkillController = new UpdateSkillController();

    const animeData = await getInfoAnime.execute({
      universal_anime_id,
    });

    const lastAnimeFinded = animeData.at(-1);
    const lastUpdated = new Date(lastAnimeFinded.updated_at);
    const today = new Date();
    const outdated = new Date(lastUpdated.setDate(today.getDate() + 7));

    const isValidToRemoveAttemp = outdated >= today;

    if (isValidToRemoveAttemp)
      await updateSkillController.handle({
        ...lastAnimeFinded,
        attempts_to_cancel_updates: --lastAnimeFinded.attempts_to_cancel_updates,
      });

    return isValidToRemoveAttemp;
  }
}

export { ValidateAttempAndRemove };
