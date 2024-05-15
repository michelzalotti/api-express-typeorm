import { User } from '../entity/User';

export type ListUsersDTO = {
  page: number;
  totalPages: number;
  totalItems: number;
  items: User[];
};
