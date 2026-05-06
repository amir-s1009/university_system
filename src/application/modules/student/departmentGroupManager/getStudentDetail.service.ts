import { GetStudentDetailService } from "../../../../core/modules/student/service/departmentGroupManager/getStudentDetail.service.js";
import { AppError } from "../../../error.js";

export const getStudentDetailService: GetStudentDetailService = async ({
  id,
  getStudentDetailRepo,
}) => {
  const studentDetail = await getStudentDetailRepo({
    id,
  });
  if (!studentDetail) throw new AppError("دانشجوی مورد نظر یافت نشد", 404);

  return {
    code: 200,
    data: studentDetail,
  };
};
