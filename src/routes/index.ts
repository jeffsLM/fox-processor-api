import { Router } from 'express';

import { populateRoutes } from './populate.routes';
import { userRoutes } from './user.routes';
import { foxRoutes } from './fox.routes';
import { queueRoutes } from './queue.routes';

const router = Router();

router.use('/populate', populateRoutes);
router.use('/history', userRoutes);
router.use('/fox', foxRoutes);
router.use('/queue', queueRoutes);

export { router };
