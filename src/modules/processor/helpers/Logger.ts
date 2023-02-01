import { ValidateAttempAndRemove } from '../../anime/helpers/ValidateAttempAndRemove';
import { AnimeIsValidToProcess } from '../../anime/helpers/AnimeIsValidToProcess';
import { ListAnimeController } from '../../anime/useCase/listAnime/ListAnimeController';

import { SaveLog } from './SaveLog';

import { ICreateFoxEpisodeDTO } from '../../episode/dtos/ICreateFoxEpisodeDTO';

interface IDataRequest {
  universal_anime_id: string;
  epData: ICreateFoxEpisodeDTO;
  flag: 'not_found' | 'success' | 'fail' | 'passthought';
}

class Logger {
  async execute(data: IDataRequest): Promise<void> {
    const { universal_anime_id, epData, flag } = data;

    const validateAttempAndRemove = new ValidateAttempAndRemove();
    const animeIsValidToProcess = new AnimeIsValidToProcess();
    const listAnimeController = new ListAnimeController();
    const saveLog = new SaveLog();

    const isValidToProcess = await animeIsValidToProcess.execute({
      universal_anime_id,
    });

    if (!isValidToProcess)
      return saveLog.execute({
        epData,
        flag: 'fail',
        attempt: 0,
        variantAttemp: false,
        txt: 'anime não é valido para o processo',
      });

    const animeInfo = await listAnimeController.handle({ universal_anime_id });
    const isValidToAttemp = await validateAttempAndRemove.execute({ universal_anime_id });

    const attempts = animeInfo.at(-1).attempts_to_cancel_updates;

    return saveLog.execute({
      epData,
      flag: flag,
      attempt: attempts,
      variantAttemp: attempts > 0,
      txt: isValidToAttemp
        ? ' - tentativa de atualização removida'
        : ' - apenas consulta realizada',
    });
  }
}

export { Logger };
