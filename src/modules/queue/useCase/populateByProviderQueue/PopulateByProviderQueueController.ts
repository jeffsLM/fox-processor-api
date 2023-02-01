import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { aPlus } from '../../../../service/aPlus';

import { ICreateFoxQueueDTO } from '../../dtos/ICreateFoxQueueDTO';
import { PopulateByProviderQueueUseCase } from './PopulateByProviderQueueUseCase';

interface IResponseObject {
  created: boolean;
  message: string;
}

interface IProviderService {
  video_id: string;
  category_id: string;
  title: string;
  category_image: string;
}

class PopulateByProviderQueueController {
  async handle(_: Request, response: Response): Promise<Response> {
    const latestAnime: IProviderService[] = await aPlus
      .get('play-api.php?latest')
      .then((e) => e.data);

    const populateByProviderQueueUseCase = container.resolve(PopulateByProviderQueueUseCase);

    latestAnime.map(async (item) => {
      const term = item.title.substring(0, item.title.length - 12);
      await populateByProviderQueueUseCase.execute({
        term,
        process: 'N',
        created_at: new Date(),
        updated_at: new Date(),
      });
    });

    return response.status(201).json(latestAnime).send();
  }
}

export { PopulateByProviderQueueController };
