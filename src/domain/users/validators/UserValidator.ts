import z from 'zod';
import { AppError } from '@shared/errors/AppError';
import { CreateUserDTO } from '../dto/CreateUserDTO';

export class UserValidator {
  static create(
    { name, email, password, isAdmin }: CreateUserDTO,
    roleId: string,
  ) {
    const validate = z
      .object({
        name: z.string().min(3, 'O nome deve possuir no mínimo 3 caracteres.'),
        email: z.string().email('O email não é válido.'),
        password: z
          .string()
          .min(8, 'A senha deve possuir no mínimo 8 caracteres.'),
        isAdmin: z.boolean({
          invalid_type_error: 'Admin deve ser verdadeiro ou falso.',
        }),
        roleId: z.string().uuid('O id da role não é válido.'),
      })
      .safeParse({ name, email, password, isAdmin, roleId });

    if (!validate.success)
      throw new AppError(
        validate.error.errors.map((e) => e.message),
        409,
      );
  }
}
