import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { RefreshTokenService } from '../services/RefreshTokenService';

export class RefreshTokenController {
  async handle(req: Request, res: Response): Promise<Response> {
    const userId = req.user.id;
    const { token } = req.body;
    const refreshTokenService = container.resolve(RefreshTokenService);

    const data = await refreshTokenService.execute(userId, token);
    return res.status(201).json(data);
  }
}
