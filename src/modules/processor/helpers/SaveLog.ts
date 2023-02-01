import { ICreateFoxEpisodeDTO } from '../../episode/dtos/ICreateFoxEpisodeDTO';
import { CreateProcessorController } from '../useCase/createProcessor/CreateProcessorController';
import { GetFlag } from './GetFlag';

interface IDataRequest {
  flag: 'not_found' | 'success' | 'fail' | 'passthought';
  variantAttemp: boolean;
  episodeData: ICreateFoxEpisodeDTO;
  txt?: string;
  last_version?: string;
  resolution?: string;
  attempt?: number;
}

class SaveLog {
  async execute(data: IDataRequest): Promise<void> {
    const {
      variantAttemp,
      flag,
      txt = '',
      episodeData,
      last_version = 'N',
      resolution = '',
      attempt = 0,
    } = data;

    const createProcessorController = new CreateProcessorController();
    const getFlag = new GetFlag();

    const validMessage = await getFlag.execute({
      flag,
      variantAttemp,
      txt,
    });

    await createProcessorController.handle({
      universal_anime_id: episodeData.universal_anime_id,
      integration_service: episodeData.integration_service,
      key: null,
      last_version,
      episode: episodeData.episode,
      attempt,
      status: validMessage.flag,
      description: validMessage.message,
      resolution,
      created_at: new Date(),
    });

    return;
  }
}

export { SaveLog };
