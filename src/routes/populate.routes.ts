import { Router } from 'express';

import { PopulateByProviderQueueController } from '../modules/queue/useCase/populateByProviderQueue/PopulateByProviderQueueController';
import { ProcessQueueByFireProviderController } from '../modules/queue/useCase/processQueueByFireProvider/ProcessQueueByFireProviderController';

const populateRoutes = Router();

const populateByProviderQueueController = new PopulateByProviderQueueController();
const processQueueByFireProviderController = new ProcessQueueByFireProviderController();

populateRoutes.post('/provider', populateByProviderQueueController.handle);
populateRoutes.post('/charge', processQueueByFireProviderController.handle);

export { populateRoutes };
