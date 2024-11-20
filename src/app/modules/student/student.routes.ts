import express from 'express';
import { studentControllers } from './student.controller';

const router = express.Router();
//create an post api that create student
router.post('/create-student', studentControllers.createStudent);

//create get api to retrive all student data
router.get('/', studentControllers.getAllStudents);

//create get api to retrive single student
router.get('/:studentId', studentControllers.getSingleStudent);

//export router object that used in app.ts
export const studentRoutes = router;
