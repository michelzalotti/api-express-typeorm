import { RolesPaginateDTO } from '../dto/RolesPaginateDTO';
import { Role } from '../entity/Role';

export interface IRoleRepository {
  create(name: string): Promise<Role>;
  findById(id: string): Promise<Role | null>;
  findByName(name: string): Promise<Role | null>;
  list(page: number, take: number, skip: number): Promise<RolesPaginateDTO>;
  update(role: Role): Promise<Role>;
  delete(role: Role): Promise<void>;
}
