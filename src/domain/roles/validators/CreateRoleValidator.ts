import z from 'zod';

export class RoleValidator {
  static create(name: string) {
    const validate = z
      .string()
      .min(4, 'O nome deve possuir no mínimo 4 caracteres.')
      .safeParse(name);

    if (!validate.success) {
      throw new Error(validate.error.errors[0].message);
    }
  }
}
