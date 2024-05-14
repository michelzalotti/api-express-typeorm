import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { DeleteRoleService } from '../services/DeleteRoleService';
import { RoleValidator } from '../validators/RoleValidator';

export class DeleteRoleController {
  async handle(req: Request, res: Response): Promise<Response> {
    const id = req.params.id;
    const deleteRoleService = container.resolve(DeleteRoleService);

    RoleValidator.id(id);
    await deleteRoleService.execute(id);
    return res.status(204).send();
  }
}
