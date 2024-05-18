import { container } from 'tsyringe';
import { LoginController } from '../controllers/LoginController';

container.registerSingleton('LoginController', LoginController);
