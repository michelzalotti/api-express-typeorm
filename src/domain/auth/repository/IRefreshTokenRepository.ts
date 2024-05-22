import { CreateRefreshTokenDTO } from '../dto/CreateRefreshTokenDTO';
import { RefreshToken } from '../entity/RefreshToken';

export interface IRefreshTokenRepository {
  create({
    userId,
    token,
    isValid,
    expiresAt,
  }: CreateRefreshTokenDTO): Promise<RefreshToken>;
  findByToken(token: string): Promise<RefreshToken | null>;
  invalidateToken(token: RefreshToken): Promise<void>;
}
