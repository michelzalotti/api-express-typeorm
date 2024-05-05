import 'dotenv/config';
import 'express-async-error';
import express, { Express } from 'express';
import { startServer } from './shared/http/server';

const app = express();
startServer(app);

class Main {
  private _app: Express;

  constructor(app: Express) {
    this._app = app;
    this._middlewares();
    this._routes();
  }

  private _middlewares() {
    this._app.use(express.json());
  }

  private _routes() {}
}

new Main(app);
