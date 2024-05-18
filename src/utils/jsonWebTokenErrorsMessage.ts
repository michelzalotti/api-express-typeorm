export function jwtErrorsMessage(error: string) {
  let code: string;
  let message: string;

  switch (error) {
    case 'JsonWebTokenError':
      code = 'token.invalid';
      message = 'Token inválido.';
      break;
    case 'TokenExpiredError':
      code = 'token.expired';
      message = 'Token expirou.';
      break;
    default:
      code = 'token.unknown';
      message = 'Erro desconhecido.';
  }

  return { error: true, code, message };
}
