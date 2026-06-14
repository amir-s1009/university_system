import { GetCourseListService } from "../../../../core/modules/course/service/departmentGroupManager/getCourseList.service.js";
import { AppError } from "../../../error.js";

export const getCourseListService: GetCourseListService = async ({
  userId,
  getCourseListRepo,
  getDepartmentGroupManagerByUserIdRepo,
}) => {
  const departmentGroupManager = await getDepartmentGroupManagerByUserIdRepo({
    userId,
  });
  if (!departmentGroupManager)
    throw new AppError("مدیر گروه آموزشی یافت نشد", 404);

  const courses = await getCourseListRepo({
    departmentGroupId: departmentGroupManager.departmentGroupId,
  });

  return {
    ok: true,
    code: 200,
    data: courses,
  };
};
