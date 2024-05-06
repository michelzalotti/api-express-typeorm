import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateRoleService } from '../services/CreateRoleService';

export class CreateRoleController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { name } = req.body;
    const createRoleService = container.resolve(CreateRoleService);

    const data = await createRoleService.execute(name);
    return res.status(201).json(data);
  }
}
