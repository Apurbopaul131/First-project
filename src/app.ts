import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import { studentRoutes } from './app/modules/student/student.routes';
const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

//application routes
app.use('/api/v1/students', studentRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('I am from Nepal');
});

export default app;
