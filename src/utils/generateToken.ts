import { User } from '@domain/users/entity/User';
import jwt, { Secret } from 'jsonwebtoken';

export function generateToken(user: User) {
  const jwtSecret = process.env.JWT_SECRET as Secret;
  const jwtExpiresTime = process.env.JWT_EXPIRES_TIME as string;
  const jwtRefreshSecret = process.env.JWT_REFRESH_SECRET as string;
  const jwtRefreshExpiresTime = process.env.JWT_REFRESH_EXPIRES_TIME as string;

  const token = jwt.sign({ userId: user.id }, jwtSecret, {
    expiresIn: jwtExpiresTime,
  });

  const refreshToken = jwt.sign({ userId: user.id }, jwtRefreshSecret, {
    expiresIn: jwtRefreshExpiresTime,
  });

  const expiresAt = getExpiresMS(jwtRefreshExpiresTime);
  return { token, refreshToken, expiresAt };
}

function getExpiresMS(expires: string): number {
  const t = expires.split('');
  const minutes = 60 * 1000;
  let time: number = 0;

  if (t.length) {
    const q = parseInt(t[0]);
    t[1] = t[1].toLowerCase();

    switch (t[1]) {
      case 'm':
        time = q * minutes;
        break;
      case 'h':
        time = q * (minutes * 60);
        break;
      case 'd':
        time = q * (minutes * 60 * 24);
        break;
      default:
        time = 0;
    }
  }

  return time + Date.now();
}
