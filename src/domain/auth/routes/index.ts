import { Router } from 'express';
import { container } from 'tsyringe';
import { RefreshTokenAuthMiddleware } from '@middlewares/RefreshTokenAuthMiddleware';
import { LoginController } from '../controllers/LoginController';
import { RefreshTokenController } from '../controllers/RefreshTokenController';

const authRouter = Router();
const loginController = container.resolve(LoginController);
const refreshTokenController = container.resolve(RefreshTokenController);

authRouter.post('/login', (req, res) => loginController.handle(req, res));
authRouter.post('/refresh-token', RefreshTokenAuthMiddleware.auth, (req, res) =>
  refreshTokenController.handle(req, res),
);

export { authRouter };
