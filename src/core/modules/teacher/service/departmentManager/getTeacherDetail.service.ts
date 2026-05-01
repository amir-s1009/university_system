import { Response } from "../../../../response.js";
import { TeacherDetailDTO } from "../../dto/departmentManager/teacherDetail.dto.js";

export type GetTeacherDetailService = ({
  id,
  userId,
}: {
  userId: string;
  id: string;
}) => Response<TeacherDetailDTO>;
