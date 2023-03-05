import { Router } from 'express';

import { CreateQueueController } from '../modules/queue/useCase/createQueue/CreateQueueController';

const queueRoutes = Router();

const createQueueController = new CreateQueueController();

queueRoutes.post('/create', createQueueController.handle);

export { queueRoutes };
