export class AppError {
  code: number;
  message: string | string[];

  constructor(message: string | string[], code = 400) {
    this.code = code;
    this.message = message;
  }
}
