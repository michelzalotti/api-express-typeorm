import { AppError } from '@shared/errors/AppError';
import { multerErrorMessages } from '@utils/multerErrorsMessage';
import { Request, Response, NextFunction } from 'express';
import { MulterError } from 'multer';

export class AppErrorMiddleware {
  static handle(err: Error, req: Request, res: Response, next: NextFunction) {
    if (err) {
      if (err instanceof AppError) {
        return res.status(err.code).json({ message: err.message });
      } else if (err instanceof MulterError) {
        return res.status(409).json({ message: multerErrorMessages(err.code) });
      }

      return res.status(500).json({ message: err.message });
    }

    next();
  }
}
