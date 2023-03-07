import { ICreateFoxEpisodeDTO } from '../../episode/dtos/ICreateFoxEpisodeDTO';
import { CreateProcessorController } from '../useCase/createProcessor/CreateProcessorController';
import { UpdateAnimeController } from '../../anime/useCase/updateAnime/UpdateAnimeController';
import { ListAnimeController } from '../../anime/useCase/listAnime/ListAnimeController';
import { GetFlag } from './GetFlag';

interface IDataRequest {
  flag: 'not_found' | 'success' | 'fail' | 'passthought';
  variantAttemp: boolean;
  epData: ICreateFoxEpisodeDTO;
  txt?: string;
  attempt?: number;
}

class SaveLog {
  async execute(data: IDataRequest): Promise<void> {
    const { variantAttemp, flag, txt = '', epData: ep, attempt = 0 } = data;

    const createProcessorController = new CreateProcessorController();
    const updateAnimeController = new UpdateAnimeController();
    const listAnimeController = new ListAnimeController();
    const getFlag = new GetFlag();

    const validMessage = await getFlag.execute({
      flag,
      variantAttemp,
      txt,
    });

    // await createProcessorController.handle({
    //   universal_anime_id: ep.universal_anime_id,
    //   integration_service: ep.integration_service,
    //   last_version: ep.last_version,
    //   episode: ep.episode,
    //   attempt,
    //   status: validMessage.flag,
    //   description: validMessage.message,
    //   resolution: ep.resolution,
    //   created_at: new Date(),
    // });

    const animeInfo = await listAnimeController.handle({
      universal_anime_id: ep.universal_anime_id,
    });

    const lastAnime = animeInfo.at(-1);
    await updateAnimeController.handle({
      updated_at: new Date(),
      attempts_to_cancel_updates: attempt,
      status: validMessage.flag,
      status_describe: validMessage.message,
      alternative_name: lastAnime.alternative_name,
      created_at: lastAnime.created_at,
      image: lastAnime.image,
      integration_id: lastAnime.integration_id,
      integration_service: lastAnime.integration_service,
      rateing: lastAnime.rateing,
      resume: lastAnime.resume,
      sub: lastAnime.sub,
      title: lastAnime.title,
      universal_anime_id: lastAnime.universal_anime_id,
    });

    return;
  }
}

export { SaveLog };
