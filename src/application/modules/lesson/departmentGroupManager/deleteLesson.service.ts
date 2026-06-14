import { DeleteLessonService } from "../../../../core/modules/lesson/service/departmentGroupManager/deleteLesson.service.js";
import { AppError } from "../../../error.js";

export const deleteLessonService: DeleteLessonService = async ({
  id,
  userId,
  deleteLessonRepo,
  getDepartmentGroupManagerByUserIdRepo,
  getLessonByIdRepo,
}) => {
  const departmentGroupManager = await getDepartmentGroupManagerByUserIdRepo({
    userId,
  });
  if (!departmentGroupManager)
    throw new AppError("مدیر گروه آموزشی یافت نشد", 404);

  const lesson = await getLessonByIdRepo({
    id,
  });
  if (!lesson) throw new AppError("درس مورد نظر یافت نشد", 404);

  if (departmentGroupManager.departmentGroupId !== lesson.departmentGroupId)
    throw new AppError(
      "شما فقط مجاز به حذف درس مرتبط با گروه آموزشی خود هستید",
      403
    );

  await deleteLessonRepo({
    id,
  });

  return {
    ok: true,
    code: 200,
    message: "درس مورد نظر حذف گردید",
  };
};
