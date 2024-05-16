import { Router } from 'express';
import { container } from 'tsyringe';
import { CreateUserController } from '../controllers/CreateUserController';
import { ListUsersController } from '../controllers/ListUsersController';

const usersRouter = Router();
const createUserController = container.resolve(CreateUserController);
const listUsersController = container.resolve(ListUsersController);

usersRouter.post('/', (req, res) => createUserController.handle(req, res));
usersRouter.get('/', (req, res) => listUsersController.handle(req, res));

export { usersRouter };
