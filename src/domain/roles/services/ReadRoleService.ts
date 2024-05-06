import { inject, injectable } from 'tsyringe';
import { AppError } from '@shared/errors/AppError';
import { IRoleRepository } from '../repository/IRoleRepository';
import { Role } from '../entity/Role';

@injectable()
export class ReadRoleService {
  constructor(
    @inject('RoleRepository') private _roleRepository: IRoleRepository,
  ) {}

  async execute(id: string): Promise<Role> {
    const role = await this._roleRepository.findById(id);
    if (!role) throw new AppError('Role não encontrada.', 404);

    return role;
  }
}
