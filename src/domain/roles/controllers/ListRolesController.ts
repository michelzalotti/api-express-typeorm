import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListRolesService } from '../services/ListRolesService';

export class ListRolesController {
  async handle(req: Request, res: Response): Promise<Response> {
    const page = Number(req.query.page) || 1;
    const listRolesService = container.resolve(ListRolesService);

    const data = await listRolesService.execute(page);
    return res.json(data);
  }
}
