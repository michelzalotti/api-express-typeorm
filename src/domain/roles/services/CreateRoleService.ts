import { inject, injectable } from 'tsyringe';
import { IRoleRepository } from '../repository/IRoleRepository';
import { Role } from '../entity/Role';

@injectable()
export class CreateRoleService {
  constructor(
    @inject('RoleRepository') private _roleRepository: IRoleRepository,
  ) {}

  async execute(name: string): Promise<Role> {
    const role = await this._roleRepository.findByName(name);
    if (role) throw new Error('Já existe uma role com o nome.');
    return this._roleRepository.create(name);
  }
}
