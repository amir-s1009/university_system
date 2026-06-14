import { CreateLessonService } from "../../../../core/modules/lesson/service/departmentGroupManager/createLesson.service.js";
import { AppError } from "../../../error.js";

export const createLessonService: CreateLessonService = async ({
  data,
  userId,
  createLessonRepo,
  getDepartmentGroupManagerByUserIdRepo,
}) => {
  const departmentGroupManager = await getDepartmentGroupManagerByUserIdRepo({
    userId,
  });
  if (!departmentGroupManager)
    throw new AppError("مدیر گروه آموزشی یافت نشد", 404);

  await createLessonRepo({
    data: {
      title: data.body.title,
      coefficient: data.body.coefficient,
      lessonType: data.body.lessonType,
      departmentGroupId: departmentGroupManager.departmentGroupId,
    },
  });

  return {
    ok: true,
    code: 200,
    message: "درس مورد نظر ایجاد گردید",
  };
};
