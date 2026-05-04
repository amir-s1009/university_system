import { Response } from "../../../../response.js";
import { EditStudentCourseRepo } from "../../repo/editStudentCourse.repo.js";
import { ChangeStudentCourseStatusSchema } from "../../schema/teacher/changeStudentCourseStatus.schema.js";

export type ChangeStudentCourseStatusService = ({
  data,
  userId,
  editStudentCourseRepo,
}: {
  data: ChangeStudentCourseStatusSchema;
  userId: string;
  editStudentCourseRepo: EditStudentCourseRepo;
}) => Response;
