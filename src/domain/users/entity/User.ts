import { Role } from '@domain/roles/entity/Role';
import { Exclude, Expose } from 'class-transformer';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

import { v4 as uuid } from 'uuid';

@Entity('users')
export class User {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  avatar: string;

  @Column()
  isAdmin: boolean;

  @Exclude()
  @Column()
  password: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => Role, { cascade: true })
  role: Role;

  constructor() {
    this.id = uuid();
  }

  @Expose({ name: 'avatar-url' })
  get avatarUrl(): string | null {
    if (this.avatar) {
      return `${process.env.BASE_URL}/files/${this.avatar}`;
    }
    return null;
  }
}
