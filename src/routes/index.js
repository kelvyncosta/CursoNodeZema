import { Router } from 'express';

import userRoutes from './users.routes';
import authRoutes from './auth.routes';

const routes = Router();

routes.use('/users', userRoutes);
routes.use('/auth', authRoutes);

export default routes;
