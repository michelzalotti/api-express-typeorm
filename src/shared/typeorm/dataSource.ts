import { DataSource } from 'typeorm';
import { CreateRoleTable1714933498362 } from './migrations/1714933498362-CreateRoleTable';

export const dataSource = new DataSource({
  type: 'sqlite',
  database: 'db/app.db',
  entities: [],
  migrations: [CreateRoleTable1714933498362],
});
