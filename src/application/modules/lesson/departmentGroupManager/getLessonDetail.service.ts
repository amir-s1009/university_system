import { GetLessonDetailService } from "../../../../core/modules/lesson/service/departmentGroupManager/getLessonDetail.service.js";
import { AppError } from "../../../error.js";

export const getLessonDetailService: GetLessonDetailService = async ({
  id,
  getLessonDetailRepo,
}) => {
  const lessonDetail = await getLessonDetailRepo({
    id,
  });
  if (!lessonDetail) throw new AppError("درس مورد نظر یافت نشد", 404);

  return {
    ok: true,
    code: 200,
    data: lessonDetail,
  };
};
