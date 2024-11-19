import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import mongoose from 'mongoose';
import config from './app/config';
const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

main().catch((err) => console.log(err));

async function main() {
  try {
    await mongoose.connect(config.database_url as string);

    app.get('/', (req: Request, res: Response) => {
      res.send(10);
    });
  } catch (error) {
    console.log(error);
  }
}

export default app;
