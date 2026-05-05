import { Response } from "../../../../response.js";
import { GetCourseByIdRepo } from "../../../course/repo/getCourseById.repo.js";
import { GetTeacherByUserIdRepo } from "../../../teacher/repo/getTeacherByUserId.repo.js";
import { EditStudentCourseRepo } from "../../repo/editStudentCourse.repo.js";
import { GetStudentCourseByIdRepo } from "../../repo/getStudentCourseById.repo.js";
import { ChangeStudentCourseStatusSchema } from "../../schema/teacher/changeStudentCourseStatus.schema.js";

export type ChangeStudentCourseStatusService = ({
  data,
  userId,
  editStudentCourseRepo,
  getTeacherByUserIdRepo,
  getStudentCourseByIdRepo,
  getCourseByIdRepo,
}: {
  data: ChangeStudentCourseStatusSchema;
  userId: string;
  editStudentCourseRepo: EditStudentCourseRepo;
  getTeacherByUserIdRepo: GetTeacherByUserIdRepo;
  getStudentCourseByIdRepo: GetStudentCourseByIdRepo;
  getCourseByIdRepo: GetCourseByIdRepo;
}) => Response;
