import { inject, injectable } from 'tsyringe';
import { AppError } from '@shared/errors/AppError';
import { IUserRepository } from '../repository/IUserRepository';
import { ListUsersDTO } from '../dto/ListUsersDTO';

@injectable()
export class ListUsersService {
  constructor(
    @inject('UserRepository') private _userRepository: IUserRepository,
  ) {}

  async execute(page: number): Promise<ListUsersDTO> {
    const take = 10;
    const skip = (page - 1) * take;

    const data = await this._userRepository.list(page, take, skip);
    if (!data.items) throw new AppError('Nada encontrado.', 404);

    return data;
  }
}
