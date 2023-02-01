import { Router } from 'express';

import { PopulateByProviderQueueController } from '../modules/queue/useCase/populateByProviderQueue/PopulateByProviderQueueController';

const populateRoutes = Router();

const populateByProviderQueueController = new PopulateByProviderQueueController();

populateRoutes.post('/provider', populateByProviderQueueController.handle);

export { populateRoutes };
