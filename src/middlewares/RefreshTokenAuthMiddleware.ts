import { jwtErrorsMessage } from '@utils/jsonWebTokenErrorsMessage';
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export class RefreshTokenAuthMiddleware {
  static auth(req: Request, res: Response, next: NextFunction) {
    const authorization = req.headers.authorization;

    if (!authorization)
      return res.status(201).json({
        error: true,
        code: 'token.not_found',
        message: 'Token não encontrado.',
      });

    const token = authorization.replace('Bearer', '').trim();

    try {
      const decode = jwt.decode(token) as { userId: string };
      req.user = { id: decode.userId };

      next();
    } catch (e: any) {
      return res.status(201).json(jwtErrorsMessage(e.name));
    }
  }
}
