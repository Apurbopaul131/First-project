import { Request, Response } from 'express';
import { StudentServices } from './student.service';

//controller function is commited to handle student post request
const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studetData } = req.body;
    //get data by calling service function StudentServices.createStudentDB(studetData)
    const result = await StudentServices.createStudentDB(studetData);

    //send response to client
    res.status(200).json({
      success: true,
      message: 'User created successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

//handle get request for retrive all student
const getAllStudents = async (req: Request, res: Response) => {
  //get all students data by calling service function
  const result = await StudentServices.getAllstudentsFromDB();
  //send response to client
  res.status(200).json({
    success: true,
    message: 'User created successfully',
    data: result,
  });
};
//handle get request for retrive all student

const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await StudentServices.getSingleStudentFromDB(studentId);
    res.status(200).json({
      success: true,
      message: 'Student data retrive successfully.',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};
export const studentControllers = {
  createStudent,
  getAllStudents,
  getSingleStudent,
};
