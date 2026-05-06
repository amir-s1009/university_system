import { Response } from "../../../../response.js";
import { GetCourseByIdRepo } from "../../../course/repo/getCourseById.repo.js";
import { GetTeacherByUserIdRepo } from "../../../teacher/repo/getTeacherByUserId.repo.js";
import { EditStudentCourseRepo } from "../../repo/editStudentCourse.repo.js";
import { GetStudentCourseByIdRepo } from "../../repo/getStudentCourseById.repo.js";
import { EditScoreSchema } from "../../schema/teacher/editScore.schema.js";

export type EditScoreService = ({
  data,
  userId,
  editStudentCourseRepo,
  getStudentCourseByIdRepo,
  getCourseByIdRepo,
  getTeacherByUserIdRepo,
}: {
  data: EditScoreSchema;
  userId: string;
  editStudentCourseRepo: EditStudentCourseRepo;
  getStudentCourseByIdRepo: GetStudentCourseByIdRepo;
  getCourseByIdRepo: GetCourseByIdRepo;
  getTeacherByUserIdRepo: GetTeacherByUserIdRepo;
}) => Response;
