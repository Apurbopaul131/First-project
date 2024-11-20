import { Student } from './student.interface';
import { StudentModel } from './student.model';

//Store student document to mongoDB database
const createStudentDB = async (student: Student) => {
  const result = await StudentModel.create(student);
  return result;
};

//Retrive all students from mongoDB database
const getAllstudentsFromDB = async () => {
  const result = await StudentModel.find({});
  return result;
};

//Retrive single student data based on the url
const getSingleStudentFromDB = async (stdId: string) => {
  const query = { id: stdId };
  const result = await StudentModel.findOne(query);
  return result;
};

//Export all functions
export const StudentServices = {
  createStudentDB,
  getAllstudentsFromDB,
  getSingleStudentFromDB,
};
