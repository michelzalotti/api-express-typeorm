import { inject, injectable } from 'tsyringe';
import { AppError } from '@shared/errors/AppError';
import { IRoleRepository } from '../repository/IRoleRepository';
import { Role } from '../entity/Role';

@injectable()
export class UpdateRoleService {
  constructor(
    @inject('RoleRepository') private _roleRepository: IRoleRepository,
  ) {}

  async execute(id: string, name: string): Promise<Role> {
    const role = await this._roleRepository.findById(id);
    if (!role) throw new AppError('Role não encontrada.', 404);

    const roleByName = await this._roleRepository.findByName(name);
    if (roleByName && roleByName.id !== role.id)
      throw new AppError('Já existe uma role com o nome.');

    role.name = name;

    return this._roleRepository.update(role);
  }
}
