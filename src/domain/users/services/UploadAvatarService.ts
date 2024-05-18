import path from 'node:path';
import fs from 'node:fs';
import { inject, injectable } from 'tsyringe';
import { AppError } from '@shared/errors/AppError';
import { IUserRepository } from '../repository/IUserRepository';
import { User } from '../entity/User';

@injectable()
export class UploadAvatarService {
  constructor(
    @inject('UserRepository') private _userRepository: IUserRepository,
  ) {}

  async execute(userId: string, filename: string): Promise<User> {
    const user = await this._userRepository.findById(userId);
    if (!user) throw new AppError('Usuário não encontrado.', 404);

    if (user.avatar) {
      const filePath = path.resolve('uploads', 'avatar', user.avatar);
      if (await fs.promises.stat(filePath)) {
        await fs.promises.unlink(filePath);
      }
    }

    user.avatar = filename;
    return this._userRepository.update(user);
  }
}
