import { Response } from "../../../../response.js";
import { StudentCourseDetailDTO } from "../../dto/teacher/studentCourseDetail.dto.js";
import { GetStudentCourseListRepo } from "../../repo/teacher/getStudentCourseList.repo.js";

export type GetStudentCourseDetailService = ({
  id,
  getStudentCourseListRepo,
}: {
  id: string;
  getStudentCourseListRepo: GetStudentCourseListRepo;
}) => Response<StudentCourseDetailDTO>;
