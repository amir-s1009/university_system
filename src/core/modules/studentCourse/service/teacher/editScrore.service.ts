import { Response } from "../../../../response.js";
import { EditStudentCourseRepo } from "../../repo/editStudentCourse.repo.js";
import { EditScoreSchema } from "../../schema/teacher/editScore.schema.js";

export type SubmitScoreService = ({
  data,
  userId,
  editStudentCourseRepo,
}: {
  data: EditScoreSchema;
  userId: string;
  editStudentCourseRepo: EditStudentCourseRepo;
}) => Response;
