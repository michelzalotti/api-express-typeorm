export type CreateRefreshTokenDTO = {
  userId: string;
  token: string;
  isValid: boolean;
  expiresAt: number;
};
