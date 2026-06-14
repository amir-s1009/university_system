import { CreateCourseService } from "../../../../core/modules/course/service/departmentGroupManager/createCourse.service.js";
import { AppError } from "../../../error.js";

export const createCourseService: CreateCourseService = async ({
  data,
  userId,
  createCourseRepo,
  getGeneralSettingsRepo,
  getDepartmentGroupManagerByUserIdRepo,
  getLessonByIdRepo,
}) => {
  const generalSettings = await getGeneralSettingsRepo();
  if (!generalSettings) throw new AppError("تنظیمات سیستم یافت نشد", 404);

  const lesson = await getLessonByIdRepo({
    id: data.body.lessonId,
  });
  if (!lesson) throw new AppError("درس دوره یافت نشد", 404);

  const departmentGroupManager = await getDepartmentGroupManagerByUserIdRepo({
    userId,
  });
  if (!departmentGroupManager) throw new AppError("مدیر گروه یافت نشد", 404);

  if (departmentGroupManager.departmentGroupId !== lesson.departmentGroupId)
    throw new AppError(
      "شما میتوانید برای درس گروه آموزشی خود دوره ایجاد کنید",
      403
    );

  await createCourseRepo({
    data: {
      canceled: false,
      capacity: data.body.capacity ?? 25,
      number: data.body.number,
      semesterId: generalSettings.activeSemesterId,
      lessonId: data.body.lessonId,
      teacherId: data.body.teacherId,
      examAt: data.body.examAt,
    },
  });

  return {
    ok: true,
    code: 200,
    message: "دوره مورد نظر ایجاد گردید",
  };
};
