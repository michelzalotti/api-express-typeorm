import 'reflect-metadata';
import 'dotenv/config';
import 'express-async-error';
import express, { Express } from 'express';
import { router } from '@shared/http/routers';
import { startServer } from './shared/http/server';
import '@shared/containers';

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

  private _routes() {
    this._app.use(router);
  }
}

new Main(app);
