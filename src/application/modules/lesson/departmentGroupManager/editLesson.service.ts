import { EditLessonService } from "../../../../core/modules/lesson/service/departmentGroupManager/editLesson.service.js";
import { AppError } from "../../../error.js";

export const editLessonService: EditLessonService = async ({
  data,
  userId,
  editLessonRepo,
  getLessonByIdRepo,
  getDepartmentGroupManagerByUserIdRepo,
}) => {
  const departmentGroupManager = await getDepartmentGroupManagerByUserIdRepo({
    userId,
  });
  if (!departmentGroupManager)
    throw new AppError("مدیر گروه آموزشی یافت نشد", 404);

  const lesson = await getLessonByIdRepo({
    id: data.params.id,
  });
  if (!lesson) throw new AppError("درس مورد نظر یافت نشد", 404);

  if (departmentGroupManager.departmentGroupId !== lesson.departmentGroupId)
    throw new AppError(
      "شما فقط مجاز به ویرایش درس گروه آموزشی خودتان هستید",
      403
    );

  await editLessonRepo({
    data: {
      id: data.params.id,
      title: data.body.title,
      coefficient: data.body.coefficient,
      lessonType: data.body.lessonType,
      departmentGroupId: departmentGroupManager.departmentGroupId,
    },
  });

  return {
    code: 200,
    message: "درس مورد نظر ایجاد گردید",
  };
};
