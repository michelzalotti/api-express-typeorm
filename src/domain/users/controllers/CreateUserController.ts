import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { instanceToInstance } from 'class-transformer';
import { CreateUserService } from '../services/CreateUserService';
import { CreateUserDTO } from '../dto/CreateUserDTO';
import { UserValidator } from '../validators/UserValidator';

export class CreateUserController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { name, email, password, isAdmin, roleId } = req.body;
    const createUserService = container.resolve(CreateUserService);

    UserValidator.create(
      { name, email, password, isAdmin } as CreateUserDTO,
      roleId,
    );

    const data = await createUserService.execute(
      { name, email, password, isAdmin } as CreateUserDTO,
      roleId,
    );

    return res.status(201).json(instanceToInstance(data));
  }
}
