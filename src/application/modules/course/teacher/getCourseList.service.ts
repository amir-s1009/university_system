import { GetCourseListService } from "../../../../core/modules/course/service/teacher/getCourseList.service.js";
import { AppError } from "../../../error.js";

export const getCourseListService: GetCourseListService = async ({
  data,
  userId,
  getCourseListRepo,
  getTeacherByUserIdRepo,
}) => {
  const teacher = await getTeacherByUserIdRepo({
    userId,
  });
  if (!teacher) throw new AppError("استاد مورد نظر یافت نشد", 404);

  const courses = await getCourseListRepo({
    teacherId: teacher.id,
    departmentGroupId: data.queries.departmentGroupId,
  });

  return {
    code: 200,
    data: courses,
  };
};
