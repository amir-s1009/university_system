import { CancelCourseService } from "../../../../core/modules/course/service/departmentGroupManager/cancelCourse.service.js";
import { AppError } from "../../../error.js";

export const cancelCourseService: CancelCourseService = async ({
  id,
  userId,
  editCourseRepo,
  getDepartmentGroupManagerByUserIdRepo,
  getCourseByIdRepo,
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
  if (!course) throw new AppError("دوره مورد نظر یافت نشد", 404);

  const lesson = await getLessonByIdRepo({
    id: course.lessonId,
  });
  if (!lesson) throw new AppError("درس دوره یافت نشد", 404);

  if (lesson.departmentGroupId !== departmentGroupManager.departmentGroupId)
    throw new AppError("شما فقط مجاز به لغو دوره گروه آموزشی خود هستید", 403);

  await editCourseRepo({
    data: {
      id,
      canceled: true,
    },
  });

  return {
    code: 200,
    message: "دوره مورد نظر لغو گردید",
  };
};
