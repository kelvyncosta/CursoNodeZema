import { Router } from 'express';

import UsersController from '../controllers/UsersController';

const userRoutes = Router();

const usersController = new UsersController();

userRoutes.get('/', usersController.index);
userRoutes.post('/', usersController.create);
userRoutes.get('/:id', usersController.show);

export default userRoutes;
