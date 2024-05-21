import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { instanceToInstance } from 'class-transformer';
import { ReadUserService } from '../services/ReadUserService';

export class ReadUserController {
  async handle(req: Request, res: Response): Promise<Response> {
    const userId = req.user.id;
    const readUserService = container.resolve(ReadUserService);

    const data = await readUserService.execute(userId);
    return res.json(instanceToInstance(data));
  }
}
