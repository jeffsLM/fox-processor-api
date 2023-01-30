import { ICreateFoxUserHistoryDTO } from '../dtos/ICreateFoxUserHistoryDTO';
import { FoxUserHistory } from '../entities/FoxUserHistory';

interface IFoxUserHistoryRepository {
  create(data: ICreateFoxUserHistoryDTO): Promise<void>;
  findByUserId(user: string): Promise<FoxUserHistory[]>;
}

export { IFoxUserHistoryRepository };
