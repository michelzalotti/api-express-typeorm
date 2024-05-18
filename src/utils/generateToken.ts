import { User } from '@domain/users/entity/User';
import jwt, { Secret } from 'jsonwebtoken';

export function generateToken(user: User) {
  const jwtSecret = process.env.JWT_SECRET as Secret;
  const jwtExpiresTime = process.env.JWT_EXPIRES_TIME as string;

  const token = jwt.sign({ userId: user.id }, jwtSecret, {
    expiresIn: jwtExpiresTime,
  });

  return token;
}
