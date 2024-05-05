import { Role } from '../entity/Role';

export type RolesPaginateDTO = {
  page: number;
  totalPages: number;
  totalItems: number;
  items: Role[];
};
