import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateRoleService } from '../services/CreateRoleService';
import { RoleValidator } from '../validators/RoleValidator';

export class CreateRoleController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { name } = req.body;
    RoleValidator.create(name);

    const createRoleService = container.resolve(CreateRoleService);
    const data = await createRoleService.execute(name);
    return res.status(201).json(data);
  }
}
