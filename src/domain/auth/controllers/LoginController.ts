import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { LoginService } from '../services/LoginService';

export class LoginController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;
    const loginService = container.resolve(LoginService);

    const data = await loginService.execute(email, password);
    return res.status(201).json(data);
  }
}
