import { inject, injectable } from 'tsyringe';
import { hashSync } from 'bcryptjs';
import { AppError } from '@shared/errors/AppError';
import { IRoleRepository } from '@domain/roles/repository/IRoleRepository';
import { IUserRepository } from '../repository/IUserRepository';
import { User } from '../entity/User';
import { CreateUserDTO } from '../dto/CreateUserDTO';

@injectable()
export class CreateUserService {
  constructor(
    @inject('UserRepository') private _userRepository: IUserRepository,
    @inject('RoleRepository') private _roleRepository: IRoleRepository,
  ) {}

  async execute(
    { name, email, password, isAdmin }: CreateUserDTO,
    roleId: string,
  ): Promise<User> {
    const user = await this._userRepository.findByEmail(email);
    if (user) throw new AppError('Já existe um usuário com esse email.');

    const role = await this._roleRepository.findById(roleId);
    if (!role) throw new AppError('Role não encontrada.');

    password = hashSync(password, 5);

    return this._userRepository.create({
      name,
      email,
      password,
      isAdmin,
      role,
    } as CreateUserDTO);
  }
}
