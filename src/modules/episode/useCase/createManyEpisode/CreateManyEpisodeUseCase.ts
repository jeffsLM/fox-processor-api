import { inject, injectable } from 'tsyringe';

import { ICreateFoxEpisodeDTO } from '../../dtos/ICreateFoxEpisodeDTO';
import { IFoxEpisodeRepository } from '../../repositories/IFoxEpisodeRepository';

interface IResponseObject {
  created: boolean;
  message: string;
}

@injectable()
class CreateManyEpisodeUseCase {
  constructor(
    @inject('FoxEpisodeRepository')
    private foxEpisodeRepository: IFoxEpisodeRepository
  ) {}

  async execute(data: ICreateFoxEpisodeDTO[]): Promise<IResponseObject> {
    await this.foxEpisodeRepository.createMany(data);

    return {
      created: true,
      message: 'success',
    };
  }
}
export { CreateManyEpisodeUseCase };
