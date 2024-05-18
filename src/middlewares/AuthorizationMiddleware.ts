import { jwtErrorsMessage } from '@utils/jsonWebTokenErrorsMessage';
import { Request, Response, NextFunction } from 'express';
import jwt, { Secret } from 'jsonwebtoken';

export class AuthorizationMiddleware {
  static authorizate(req: Request, res: Response, next: NextFunction) {
    const authorization = req.headers.authorization;
    if (!authorization)
      return res.status(401).json({
        error: true,
        code: 'token.not_found',
        message: 'Token não encontrado.',
      });

    const token = authorization.replace('Bearer', '').trim();
    const jwtSecret = process.env.JWT_SECRET as Secret;

    try {
      const payload = jwt.verify(token, jwtSecret) as { userId: string };
      req.user = { id: payload.userId };

      next();
    } catch (e: any) {
      return res.status(401).json(jwtErrorsMessage(e.name));
    }
  }
}
