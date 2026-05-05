import { Response } from "../../../../response.js";
import { GetTeacherByUserIdRepo } from "../../../teacher/repo/getTeacherByUserId.repo.js";
import { StudentCourseListItemDTO } from "../../dto/teacher/studentCourseListItem.dto.js";
import { GetStudentCourseListRepo } from "../../repo/teacher/getStudentCourseList.repo.js";
import { GetStudentCourseListSchema } from "../../schema/teacher/getStudentCourseList.schema.js";

export type GetStudentCourseListService = ({
  data,
  userId,
  getStudentCourseListRepo,
  getTeacherByUserIdRepo,
}: {
  data: GetStudentCourseListSchema;
  userId: string;
  getStudentCourseListRepo: GetStudentCourseListRepo;
  getTeacherByUserIdRepo: GetTeacherByUserIdRepo;
}) => Response<StudentCourseListItemDTO[]>;
