import { Router } from 'express';

import { HttpsCreateQueueController } from '../modules/queue/useCase/HttpsCreateQueue/HttpsCreateQueueController';

const queueRoutes = Router();

const httpsCreateQueueController = new HttpsCreateQueueController();

queueRoutes.post('/create', httpsCreateQueueController.handle);

export { queueRoutes };
