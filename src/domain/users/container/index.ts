import { container } from 'tsyringe';
import { IUserRepository } from '../repository/IUserRepository';
import { UserRepository } from '../repository/UserRepository';
import { CreateUserController } from '../controllers/CreateUserController';
import { ListUsersController } from '../controllers/ListUsersController';
import { UploadAvatarController } from '../controllers/UploadAvatarController';
import { ReadUserController } from '../controllers/ReadUserController';
import { UpdateUserController } from '../controllers/UpdateUserController';

container.registerSingleton<IUserRepository>('UserRepository', UserRepository);
//controllers
container.registerSingleton('CreateUserController', CreateUserController);
container.registerSingleton('ListUsersController', ListUsersController);
container.registerSingleton('UploadAvatartController', UploadAvatarController);
container.registerSingleton('ReadUserController', ReadUserController);
container.registerSingleton('UpdateUserController', UpdateUserController);
