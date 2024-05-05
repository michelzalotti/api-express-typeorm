import { Express } from 'express';
import { dataSource } from '@shared/typeorm/dataSource';

export async function startServer(app: Express) {
  const port = String(process.env.PORT);

  try {
    await dataSource.initialize();
    app.listen(port, () => console.log(`server is running at port: ${port}`));
  } catch (e: any) {
    console.error(e);
  }
}
