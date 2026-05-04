import { Response } from "../../../../response.js";
import { CreateStudentCourseRepo } from "../../repo/createStudentCourse.repo.js";
import { CreateStudentCourseSchema } from "../../schema/student/createStudentCourse.schema.js";

export type CreateStudentCourseService = ({
  data,
  userId,
  createStudentCourseRepo,
}: {
  data: CreateStudentCourseSchema;
  userId: string;
  createStudentCourseRepo: CreateStudentCourseRepo;
}) => Response;
