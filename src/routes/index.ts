import { Router } from 'express';

import { populateRoutes } from './populate.routes';

const router = Router();

router.use('/populate', populateRoutes);

export { router };
