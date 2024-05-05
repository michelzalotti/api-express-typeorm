import { Repository } from 'typeorm';
import { dataSource } from '@shared/typeorm/dataSource';
import { RolesPaginateDTO } from '../dto/RolesPaginateDTO';
import { Role } from '../entity/Role';
import { IRoleRepository } from './IRoleRepository';

export class RoleRepository implements IRoleRepository {
  private _repository: Repository<Role>;

  constructor() {
    this._repository = dataSource.getRepository(Role);
  }

  create(name: string): Promise<Role> {
    const role = this._repository.create({ name });
    return this._repository.save(role);
  }

  findById(id: string): Promise<Role | null> {
    return this._repository.findOneBy({ id });
  }

  findByName(name: string): Promise<Role | null> {
    return this._repository.findOneBy({ name });
  }

  async list(
    page: number,
    take: number,
    skip: number,
  ): Promise<RolesPaginateDTO> {
    const [items, totalItems] = await this._repository
      .createQueryBuilder('r')
      .leftJoinAndSelect('r.role', 'role')
      .take(take)
      .skip(skip)
      .getManyAndCount();

    const totalPages = Math.ceil(totalItems / take);

    return {
      page,
      totalPages,
      totalItems,
      items,
    };
  }

  update(role: Role): Promise<Role> {
    return this._repository.save(role);
  }

  async delete(role: Role): Promise<void> {
    await this._repository.remove(role);
  }
}
