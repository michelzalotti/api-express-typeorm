import path from 'node:path';
import 'reflect-metadata';
import 'dotenv/config';
import 'express-async-errors';
import express, { Express } from 'express';
import { router } from '@shared/http/routers';
import { AppErrorMiddleware } from '@middlewares/AppErrorMiddleware';
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
    this._app.use('/files', express.static(path.resolve('uploads', 'avatar')));
  }

  private _routes() {
    this._app.use(router);
    this._app.use(AppErrorMiddleware.handle);
  }
}

new Main(app);
