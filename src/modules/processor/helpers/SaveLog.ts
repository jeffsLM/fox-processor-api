import { ICreateFoxEpisodeDTO } from '../../episode/dtos/ICreateFoxEpisodeDTO';
import { CreateProcessorController } from '../useCase/createProcessor/CreateProcessorController';
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
    const getFlag = new GetFlag();

    const validMessage = await getFlag.execute({
      flag,
      variantAttemp,
      txt,
    });

    await createProcessorController.handle({
      universal_anime_id: ep.universal_anime_id,
      integration_service: ep.integration_service,
      last_version: ep.last_version,
      episode: ep.episode,
      attempt,
      status: validMessage.flag,
      description: validMessage.message,
      resolution: ep.resolution,
      created_at: new Date(),
    });

    return;
  }
}

export { SaveLog };
