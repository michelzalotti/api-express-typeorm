import { inject, injectable } from 'tsyringe';
import { generateToken } from '@utils/generateToken';
import { IUserRepository } from '@domain/users/repository/IUserRepository';
import { AppError } from '@shared/errors/AppError';
import { IRefreshTokenRepository } from '../repository/IRefreshTokenRepository';

@injectable()
export class RefreshTokenService {
  constructor(
    @inject('RefreshTokenRepository')
    private _refreshTokenRepository: IRefreshTokenRepository,
    @inject('UserRepository') private _userRepository: IUserRepository,
  ) {}

  async execute(userId: string, userToken: string) {
    const user = await this._userRepository.findById(userId);
    if (!user) throw new AppError('Usuário não encontrado.', 404);

    const userRefreshToken =
      await this._refreshTokenRepository.findByToken(userToken);

    if (!userRefreshToken) throw new AppError('Token não encontrado.', 201);

    if (
      userRefreshToken &&
      userRefreshToken.isValid &&
      userRefreshToken.expiresAt < Date.now()
    ) {
      await this._refreshTokenRepository.invalidateToken(userRefreshToken);
      throw new AppError('Token expirado.', 201);
    }

    const { token, refreshToken, expiresAt } = generateToken(user);
    await this._refreshTokenRepository.create({
      userId: user.id,
      token: refreshToken,
      isValid: true,
      expiresAt,
    });

    return { token, refreshToken };
  }
}
