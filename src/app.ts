import dotenv from 'dotenv';
dotenv.config();
import express, { Request, Response, Express } from 'express';
import cors from 'cors';
import path from 'path';
import './config/db';
import router from './routes';

class App {
  app: Express;
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares(): void {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(cors());
    this.app.use('/uploads', express.static(path.join(__dirname, '/uploads')));
  }

  routes(): void {
    this.app.use(router);
    this.app.get('/', (req: Request, res: Response) => {
      return res.send('ProjectsLBS');
    });
  }
}

const { app } = new App();

export default app;
