import { CreateUserDTO } from '../dto/CreateUserDTO';
import { ListUsersDTO } from '../dto/ListUsersDTO';
import { User } from '../entity/User';

export interface IUserRepository {
  create({
    name,
    email,
    password,
    isAdmin,
    role,
  }: CreateUserDTO): Promise<User>;
  findById(id: string): Promise<User | null>;
  findByEmail(email: string): Promise<User | null>;
  list(page: number, take: number, skip: number): Promise<ListUsersDTO>;
  update(user: User): Promise<User>;
}
