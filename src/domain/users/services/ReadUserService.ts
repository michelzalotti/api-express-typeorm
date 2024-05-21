import { inject, injectable } from 'tsyringe';
import { AppError } from '@shared/errors/AppError';
import { IUserRepository } from '../repository/IUserRepository';
import { User } from '../entity/User';

@injectable()
export class ReadUserService {
  constructor(
    @inject('UserRepository') private _userRepository: IUserRepository,
  ) {}

  async execute(userId: string): Promise<User> {
    const user = await this._userRepository.findById(userId);
    if (!user) throw new AppError('Usuário não encontrado.', 404);

    return user;
  }
}
