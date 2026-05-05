import { DeleteCourseService } from "../../../../core/modules/course/service/departmentGroupManager/deleteCourse.service.js";
import { AppError } from "../../../error.js";

export const deleteCourseService: DeleteCourseService = async ({
  id,
  userId,
  deleteCourseRepo,
  getCourseByIdRepo,
  getDepartmentGroupManagerByUserIdRepo,
  getLessonByIdRepo,
}) => {
  const departmentGroupManager = await getDepartmentGroupManagerByUserIdRepo({
    userId,
  });
  if (!departmentGroupManager)
    throw new AppError("مدیر گروه آموزشی یافت نشد", 404);

  const course = await getCourseByIdRepo({
    id,
  });
  if (!course)
    throw new AppError("دوره ای که به دنبال حذف آن هستید یافت نشد", 404);

  const lesson = await getLessonByIdRepo({
    id: course.lessonId,
  });
  if (!lesson) throw new AppError("درس دوره مورد نظر یافت نشد", 404);

  if (lesson.departmentGroupId !== departmentGroupManager.departmentGroupId)
    throw new AppError(
      "شما فقط مجاز به حذف دوره گروه آموزشی خودتان هستید",
      403
    );

  await deleteCourseRepo({
    id,
  });

  return {
    code: 200,
    message: "دوره مورد نظر حذف گردید",
  };
};
