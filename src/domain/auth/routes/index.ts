import { Router } from 'express';
import { container } from 'tsyringe';
import { LoginController } from '../controllers/LoginController';

const authRouter = Router();
const loginController = container.resolve(LoginController);

authRouter.post('/login', (req, res) => loginController.handle(req, res));

export { authRouter };
