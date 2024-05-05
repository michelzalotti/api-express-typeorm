import { DataSource } from 'typeorm';
import { Role } from '@domain/roles/entity/Role';
import { CreateRoleTable1714933498362 } from './migrations/1714933498362-CreateRoleTable';

export const dataSource = new DataSource({
  type: 'sqlite',
  database: 'db/app.db',
  entities: [Role],
  migrations: [CreateRoleTable1714933498362],
});
