import { DataSource } from 'typeorm';
import { Role } from '@domain/roles/entity/Role';
import { User } from '@domain/users/entity/User';
import { RefreshToken } from '@domain/auth/entity/RefreshToken';
import { CreateRoleTable1714933498362 } from './migrations/1714933498362-CreateRoleTable';
import { CreateUserTable1715786346402 } from './migrations/1715786346402-CreateUserTable';
import { CreateUserRoleRelations1715787789662 } from './migrations/1715787789662-CreateUserRoleRelations';
import { CreateRefreshTokenTable1716380559505 } from './migrations/1716380559505-CreateRefreshTokenTable';

export const dataSource = new DataSource({
  type: 'sqlite',
  database: 'db/app.db',
  entities: [Role, User, RefreshToken],
  migrations: [
    CreateRoleTable1714933498362,
    CreateUserTable1715786346402,
    CreateUserRoleRelations1715787789662,
    CreateRefreshTokenTable1716380559505,
  ],
});
