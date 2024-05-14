import { inject, injectable } from 'tsyringe';
import { AppError } from '@shared/errors/AppError';
import { IRoleRepository } from '../repository/IRoleRepository';

@injectable()
export class DeleteRoleService {
  constructor(
    @inject('RoleRepository') private _roleRepository: IRoleRepository,
  ) {}

  async execute(id: string): Promise<void> {
    const role = await this._roleRepository.findById(id);
    if (!role) throw new AppError('Role não encontrda.', 404);

    await this._roleRepository.delete(role);
  }
}
