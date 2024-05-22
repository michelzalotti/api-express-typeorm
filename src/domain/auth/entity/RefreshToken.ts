import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity('refresh_tokens')
export class RefreshToken {
  @PrimaryColumn()
  id: string;

  @Column()
  userId: string;

  @Column()
  token: string;

  @Column()
  isValid: boolean;

  @Column()
  expiresAt: number;

  @CreateDateColumn()
  createdAt: Date;

  constructor() {
    this.id = uuid();
  }
}
