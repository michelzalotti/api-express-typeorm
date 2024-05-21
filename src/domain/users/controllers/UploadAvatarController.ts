import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { instanceToInstance } from 'class-transformer';
import { AppError } from '@shared/errors/AppError';
import { UploadAvatarService } from '../services/UploadAvatarService';

export class UploadAvatarController {
  async handle(req: Request, res: Response): Promise<Response> {
    const userId = req.user.id;

    const filename = req.file?.filename;
    if (!filename) throw new AppError('Arquivo não encontrado.', 404);

    const uploadAvatarService = container.resolve(UploadAvatarService);
    const data = await uploadAvatarService.execute(userId, filename);

    return res.status(201).json(instanceToInstance(data));
  }
}
