import { GetCourseDetailService } from "../../../../core/modules/course/service/departmentGroupManager/getCourseDetail.service.js";
import { AppError } from "../../../error.js";

export const getCourseDetailService: GetCourseDetailService = async ({
  id,
  getCourseDetailRepo,
}) => {
  const course = await getCourseDetailRepo({
    id,
  });

  if (!course) throw new AppError("دوره مورد نظر یافت نشد", 404);

  return {
    ok: true,
    code: 200,
    data: course,
  };
};
