import { Repository } from 'typeorm';
import { dataSource } from '@shared/typeorm/dataSource';
import { CreateUserDTO } from '../dto/CreateUserDTO';
import { ListUsersDTO } from '../dto/ListUsersDTO';
import { User } from '../entity/User';
import { IUserRepository } from './IUserRepository';

export class UserRepository implements IUserRepository {
  private _repository: Repository<User>;

  constructor() {
    this._repository = dataSource.getRepository(User);
  }

  create({
    name,
    email,
    password,
    isAdmin,
    role,
  }: CreateUserDTO): Promise<User> {
    const user = this._repository.create({
      name,
      email,
      password,
      isAdmin,
      role,
    });

    return this._repository.save(user);
  }

  async list(page: number, take: number, skip: number): Promise<ListUsersDTO> {
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

  findById(id: string): Promise<User | null> {
    return this._repository.findOneBy({ id });
  }

  findByEmail(email: string): Promise<User | null> {
    return this._repository.findOneBy({ email });
  }

  update(user: User): Promise<User> {
    return this._repository.save(user);
  }
}
