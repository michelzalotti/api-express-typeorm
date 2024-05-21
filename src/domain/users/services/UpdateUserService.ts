import { inject, injectable } from 'tsyringe';
import { compareSync, hashSync } from 'bcryptjs';
import { IRoleRepository } from '@domain/roles/repository/IRoleRepository';
import { AppError } from '@shared/errors/AppError';
import { IUserRepository } from '../repository/IUserRepository';
import { User } from '../entity/User';
import { UpdateUserDTO } from '../dto/UpdateUserDTO';

@injectable()
export class UpdateUserService {
  constructor(
    @inject('UserRepository') private _userRepository: IUserRepository,
    @inject('RoleRepository') private _roleRepository: IRoleRepository,
  ) {}

  async execute(
    userId: string,
    { name, email, password, newPassword, isAdmin, roleId }: UpdateUserDTO,
  ): Promise<User> {
    const user = await this._userRepository.findById(userId);
    if (!user) throw new AppError('Usuário não encontrado.', 404);

    user.name = name;
    user.email = email;
    user.isAdmin = isAdmin;

    const role = await this._roleRepository.findById(roleId);
    if (!role) throw new AppError('Role não encontrada.', 404);

    user.role = role;

    if (password && newPassword) {
      const checkPassword = compareSync(password, user.password);

      if (!checkPassword) throw new AppError('Senha incorreta.');
      user.password = hashSync(newPassword, 5);
    }

    return this._userRepository.update(user);
  }
}
