import { Response } from "../../../../response.js";
import { GetStudentByUserIdRepo } from "../../../student/repo/getStudentByUserId.repo.js";
import { StudentCourseListItemDTO } from "../../dto/student/studentCourseListItem.dto.js";
import { GetStudentCourseListRepo } from "../../repo/student/getStudentCourseList.repo.js";
import { GetStudentCourseListSchema } from "../../schema/student/getStudentCourseList.schema.js";

export type GetStudentCourseListService = ({
  data,
  userId,
  getStudentCourseListRepo,
  getStudentByUserIdRepo,
}: {
  data: GetStudentCourseListSchema;
  userId: string;
  getStudentCourseListRepo: GetStudentCourseListRepo;
  getStudentByUserIdRepo: GetStudentByUserIdRepo;
}) => Response<StudentCourseListItemDTO[]>;
