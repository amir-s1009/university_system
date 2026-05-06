import { Response } from "../../../../response.js";
import { GetTeacherByUserIdRepo } from "../../../teacher/repo/getTeacherByUserId.repo.js";
import { StudentCourseDetailDTO } from "../../dto/teacher/studentCourseDetail.dto.js";
import { GetStudentCourseDetailRepo } from "../../repo/teacher/getStudentCourseDetail.repo.js";

export type GetStudentCourseDetailService = ({
  id,
  userId,
  getStudentCourseDetailRepo,
  getTeacherByUserIdRepo,
}: {
  id: string;
  userId:string;
  getStudentCourseDetailRepo: GetStudentCourseDetailRepo;
  getTeacherByUserIdRepo: GetTeacherByUserIdRepo;
}) => Response<StudentCourseDetailDTO>;
