import { ICreateFoxProcessorDTO } from '../dtos/ICreateFoxProcessorDTO';

interface IFoxProcessorRepository {
  create(data: ICreateFoxProcessorDTO): Promise<void>;
}

export { IFoxProcessorRepository };
