import { Role } from '@domain/roles/entity/Role';

export type CreateUserDTO = {
  name: string;
  email: string;
  avatar: string | null;
  password: string;
  isAdmin: boolean;
  role: Role;
};
