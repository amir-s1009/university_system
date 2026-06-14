import { GetLessonListService } from "../../../../core/modules/lesson/service/departmentGroupManager/getLessonList.service.js";
import { AppError } from "../../../error.js";

export const getLessonListService: GetLessonListService = async ({
  userId,
  getLessonListRepo,
  getDepartmentGroupManagerByUserIdRepo,
}) => {
  const departmentGroupManager = await getDepartmentGroupManagerByUserIdRepo({
    userId,
  });
  if (!departmentGroupManager)
    throw new AppError("مدیر گروه آموزشی یافت نشد", 404);

  const lessonList = await getLessonListRepo({
    departmentGroupId: departmentGroupManager.departmentGroupId,
  });

  return {
    ok: true,
    code: 200,
    data: lessonList,
  };
};
