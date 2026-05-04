import { Response } from "../../../../response.js";
import { StudentCourseListItemDTO } from "../../dto/student/studentCourseListItem.dto.js";
import { GetStudentCourseListRepo } from "../../repo/student/getStudentCourseList.repo.js";
import { GetStudentCourseListSchema } from "../../schema/student/getStudentCourseList.schema.js";

export type GetStudentCourseListService = ({
  data,
  userId,
  getStudentCourseListRepo,
}: {
  data: GetStudentCourseListSchema;
  userId: string;
  getStudentCourseListRepo: GetStudentCourseListRepo;
}) => Response<StudentCourseListItemDTO[]>;
