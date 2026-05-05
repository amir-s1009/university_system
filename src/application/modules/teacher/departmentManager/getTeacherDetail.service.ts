import { GetTeacherDetailService } from "../../../../core/modules/teacher/service/departmentManager/getTeacherDetail.service.js";
import { AppError } from "../../../error.js";

export const getTeacherDetailService: GetTeacherDetailService = async ({
  id,
  userId,
  getTeacherDetailRepo,
}) => {
  const teacherDetail = await getTeacherDetailRepo({
    id,
  });

  if (!teacherDetail) throw new AppError("استاد یافت نشد", 404);

  return {
    code: 200,
    data: teacherDetail,
  };
};
