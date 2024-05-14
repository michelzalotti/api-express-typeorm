import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { UpdateRoleService } from '../services/UpdateRoleService';
import { RoleValidator } from '../validators/RoleValidator';

export class UpdateRoleController {
  async handle(req: Request, res: Response): Promise<Response> {
    const id = req.params.id;
    const { name } = req.body;

    RoleValidator.update(id, name);
    const updateRoleService = container.resolve(UpdateRoleService);

    const data = await updateRoleService.execute(id, name);
    return res.json(data);
  }
}
