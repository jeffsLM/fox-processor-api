import { Router } from 'express';

import { CreateUserHistoryController } from '../modules/user_history/useCase/createUserHistory/CreateUserHistoryController';
import { ListUserHistoryController } from '../modules/user_history/useCase/listUserHistory/ListUserHistoryController';

const userRoutes = Router();

const createUserHistoryController = new CreateUserHistoryController();
const listUserHistoryController = new ListUserHistoryController();

userRoutes.post('/create', createUserHistoryController.handle);
userRoutes.post('/list', listUserHistoryController.handle);

export { userRoutes };
