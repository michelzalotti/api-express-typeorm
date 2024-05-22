import { Repository } from 'typeorm';
import { dataSource } from '@shared/typeorm/dataSource';
import { CreateRefreshTokenDTO } from '../dto/CreateRefreshTokenDTO';
import { RefreshToken } from '../entity/RefreshToken';
import { IRefreshTokenRepository } from './IRefreshTokenRepository';

export class RefreshTokenRepository implements IRefreshTokenRepository {
  private _repository: Repository<RefreshToken>;

  constructor() {
    this._repository = dataSource.getRepository(RefreshToken);
  }

  create({
    userId,
    token,
    isValid,
    expiresAt,
  }: CreateRefreshTokenDTO): Promise<RefreshToken> {
    const refreshToken = this._repository.create({
      userId,
      token,
      isValid,
      expiresAt,
    });

    return this._repository.save(refreshToken);
  }

  findByToken(token: string): Promise<RefreshToken | null> {
    return this._repository.findOneBy({ token });
  }

  async invalidateToken(token: RefreshToken): Promise<void> {
    token.isValid = false;
    await this._repository.save(token);
  }
}
