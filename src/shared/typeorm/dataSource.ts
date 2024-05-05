import { DataSource } from 'typeorm';

export const dataSource = new DataSource({
  type: 'sqlite',
  database: 'db/app.db',
  entities: [],
  migrations: [],
});
