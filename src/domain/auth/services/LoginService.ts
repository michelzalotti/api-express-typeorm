import { compareSync } from 'bcryptjs';
import { inject, injectable } from 'tsyringe';
import { IUserRepository } from '@domain/users/repository/IUserRepository';
import { AppError } from '@shared/errors/AppError';
import { generateToken } from '@utils/generateToken';

@injectable()
export class LoginService {
  constructor(
    @inject('UserRepository') private _userRepository: IUserRepository,
  ) {}

  async execute(email: string, password: string) {
    const user = await this._userRepository.findByEmail(email);
    if (!user) throw new AppError('Usuário/Senha incorretos.', 401);

    const passwordCheck = compareSync(password, user.password);
    if (!passwordCheck) throw new AppError('Usuário/Senha incorretos.', 401);

    const token = generateToken(user);
    return { token };
  }
}
