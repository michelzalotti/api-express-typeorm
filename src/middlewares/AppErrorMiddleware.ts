import { AppError } from '@shared/errors/AppError';
import { Request, Response, NextFunction } from 'express';

export class AppErrorMiddleware {
  static handle(err: Error, req: Request, res: Response, next: NextFunction) {
    if (err) {
      if (err instanceof AppError) {
        return res.status(err.code).json({ message: err.message });
      }

      return res.status(500).json({ message: 'Erro interno do servidor.' });
    }

    next();
  }
}
