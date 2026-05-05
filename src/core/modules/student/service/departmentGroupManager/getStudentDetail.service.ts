import { Response } from "../../../../response.js";
import { StudentDetailDTO } from "../../dto/departmentGroupManager/studentDetail.dto.js";
import { GetStudentDetailRepo } from "../../repo/departmentGroupManager/getStudentDetail.repo.js";

export type GetStudentDetailService = ({
  id,
  getStudentDetailRepo,
}: {
  id: string;
  getStudentDetailRepo: GetStudentDetailRepo;
}) => Response<StudentDetailDTO>;
