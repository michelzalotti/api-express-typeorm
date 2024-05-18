import { Router } from 'express';
import { container } from 'tsyringe';
import { AuthorizationMiddleware } from '@middlewares/AuthorizationMiddleware';
import { CreateUserController } from '../controllers/CreateUserController';
import { ListUsersController } from '../controllers/ListUsersController';

const usersRouter = Router();
const createUserController = container.resolve(CreateUserController);
const listUsersController = container.resolve(ListUsersController);

usersRouter.use(AuthorizationMiddleware.authorizate);
usersRouter.post('/', (req, res) => createUserController.handle(req, res));
usersRouter.get('/', (req, res) => listUsersController.handle(req, res));

export { usersRouter };
