import { Express } from 'express';

export function startServer(app: Express) {
  const port = String(process.env.PORT);
  app.listen(port, () => console.log('server is running...'));
}
