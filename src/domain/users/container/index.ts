import { container } from 'tsyringe';
import { IUserRepository } from '../repository/IUserRepository';
import { UserRepository } from '../repository/UserRepository';
import { CreateUserController } from '../controllers/CreateUserController';
import { ListUsersController } from '../controllers/ListUsersController';

container.registerSingleton<IUserRepository>('UserRepository', UserRepository);
//controllers
container.registerSingleton('CreateUserController', CreateUserController);
container.registerSingleton('ListUsersController', ListUsersController);
