import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ReadRoleService } from '../services/ReadRoleService';
import { RoleValidator } from '../validators/RoleValidator';

export class ReadRoleController {
  async handle(req: Request, res: Response): Promise<Response> {
    const roleId = req.params.id;
    RoleValidator.id(roleId);

    const readRoleService = container.resolve(ReadRoleService);
    const data = await readRoleService.execute(roleId);

    return res.json(data);
  }
}
