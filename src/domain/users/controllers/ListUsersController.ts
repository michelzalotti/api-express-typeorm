import { container } from 'tsyringe';
import { Request, Response } from 'express';
import { instanceToInstance } from 'class-transformer';
import { ListUsersService } from '../services/ListUsersService';

export class ListUsersController {
  async handle(req: Request, res: Response): Promise<Response> {
    const page = Number(req.query.page) || 1;
    const listUsersService = container.resolve(ListUsersService);

    const data = await listUsersService.execute(page);
    return res.json(instanceToInstance(data));
  }
}
