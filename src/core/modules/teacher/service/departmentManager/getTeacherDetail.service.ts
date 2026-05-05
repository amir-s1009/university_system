import { Response } from "../../../../response.js";
import { TeacherDetailDTO } from "../../dto/departmentManager/teacherDetail.dto.js";
import { GetTeacherDetailRepo } from "../../repo/departmentManager/getTeacherDetail.repo.js";

export type GetTeacherDetailService = ({
  id,
  userId,
  getTeacherDetailRepo,
}: {
  userId: string;
  id: string;
  getTeacherDetailRepo: GetTeacherDetailRepo;
}) => Response<TeacherDetailDTO>;
