import { Response } from "../../../../response.js";
import { StudentCourseListItemDTO } from "../../dto/teacher/studentCourseListItem.dto.js";
import { GetStudentCourseListRepo } from "../../repo/teacher/getStudentCourseList.repo.js";
import { GetStudentCourseListSchema } from "../../schema/teacher/getStudentCourseList.schema.js";

export type GetStudentCourseListService = ({
  data,
  userId,
  getStudentCourseListRepo,
}: {
  data: GetStudentCourseListSchema;
  userId: string;
  getStudentCourseListRepo: GetStudentCourseListRepo;
}) => Response<StudentCourseListItemDTO[]>;
