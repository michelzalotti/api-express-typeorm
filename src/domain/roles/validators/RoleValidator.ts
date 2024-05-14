import { AppError } from '@shared/errors/AppError';
import z from 'zod';

export class RoleValidator {
  static create(name: string) {
    const validate = z
      .string()
      .min(4, 'O nome deve possuir no mínimo 4 caracteres.')
      .safeParse(name);

    if (!validate.success) {
      throw new AppError(
        validate.error.errors.map((e) => e.message),
        409,
      );
    }
  }

  static id(id: string) {
    const validate = z.string().uuid('Id inválido.').safeParse(id);

    if (!validate.success)
      throw new AppError(
        validate.error.errors.map((e) => e.message),
        409,
      );
  }

  static update(id: string, name: string) {
    const validate = z
      .object({
        id: z.string().uuid('O id não é válido.'),
        name: z.string().min(4, 'O nome deve possuir no mínimo 4 caracteres.'),
      })
      .safeParse({ id, name });

    if (!validate.success)
      throw new AppError(
        validate.error.errors.map((e) => e.message),
        409,
      );
  }
}
