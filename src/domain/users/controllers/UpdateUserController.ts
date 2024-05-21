import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { instanceToInstance } from 'class-transformer';
import { UpdateUserService } from '../services/UpdateUserService';
import { UpdateUserDTO } from '../dto/UpdateUserDTO';
import { UserValidator } from '../validators/UserValidator';

export class UpdateUserController {
  async handle(req: Request, res: Response): Promise<Response> {
    const userId = req.user.id;
    const {
      name,
      email,
      password,
      newPassword,
      confirmPassword,
      isAdmin,
      roleId,
    } = req.body;

    UserValidator.update({
      name,
      email,
      password,
      newPassword,
      confirmPassword,
      isAdmin,
      roleId,
    });

    const updateUserService = container.resolve(UpdateUserService);

    const data = await updateUserService.execute(userId, {
      name,
      email,
      password,
      newPassword,
      isAdmin,
      roleId,
    } as UpdateUserDTO);

    return res.json(instanceToInstance(data));
  }
}
