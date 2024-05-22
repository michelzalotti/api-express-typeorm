import { container } from 'tsyringe';
import { LoginController } from '../controllers/LoginController';
import { IRefreshTokenRepository } from '../repository/IRefreshTokenRepository';
import { RefreshTokenRepository } from '../repository/RefreshTokenRepository';
import { RefreshTokenController } from '../controllers/RefreshTokenController';

container.registerSingleton<IRefreshTokenRepository>(
  'RefreshTokenRepository',
  RefreshTokenRepository,
);

//controllers
container.registerSingleton('LoginController', LoginController);
container.registerSingleton('RefreshTokenController', RefreshTokenController);
