import { inject, injectable } from 'tsyringe';
import { AppError } from '@shared/errors/AppError';
import { IRoleRepository } from '../repository/IRoleRepository';
import { RolesPaginateDTO } from '../dto/RolesPaginateDTO';

@injectable()
export class ListRolesService {
  constructor(
    @inject('RoleRepository') private _roleRepository: IRoleRepository,
  ) {}
  async execute(page: number): Promise<RolesPaginateDTO> {
    const take = 10;
    const skip = (page - 1) * take;

    const data = await this._roleRepository.list(page, take, skip);
    if (data.totalItems < 1) throw new AppError('Nada encontrado.', 404);

    return data;
  }
}
