import { Router } from 'express';
import { container } from 'tsyringe';
import multer from 'multer';
import { multerOptions } from '@config/multerConfig';
import { AuthorizationMiddleware } from '@middlewares/AuthorizationMiddleware';
import { CreateUserController } from '../controllers/CreateUserController';
import { ListUsersController } from '../controllers/ListUsersController';
import { UploadAvatarController } from '../controllers/UploadAvatarController';
import { ReadUserController } from '../controllers/ReadUserController';
import { UpdateUserController } from '../controllers/UpdateUserController';

const usersRouter = Router();
const createUserController = container.resolve(CreateUserController);
const listUsersController = container.resolve(ListUsersController);
const uploadAvatarController = container.resolve(UploadAvatarController);
const readUserController = container.resolve(ReadUserController);
const updateUserController = container.resolve(UpdateUserController);

usersRouter.post('/', (req, res) => createUserController.handle(req, res));
usersRouter.use(AuthorizationMiddleware.authorizate);
usersRouter.get('/', (req, res) => listUsersController.handle(req, res));
usersRouter.get('/profile', (req, res) => readUserController.handle(req, res));
usersRouter.put('/profile', (req, res) =>
  updateUserController.handle(req, res),
);
usersRouter.patch(
  '/profile/avatar',
  multer(multerOptions).single('image'),
  (req, res) => uploadAvatarController.handle(req, res),
);

export { usersRouter };
