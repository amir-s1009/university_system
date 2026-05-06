import { GetStudentCourseDetailService } from "../../../../core/modules/studentCourse/service/teacher/getStudentCourseDetail.service.js";
import { AppError } from "../../../error.js";

export const getStudentCourseDetailService: GetStudentCourseDetailService =
  async ({
    id,
    userId,
    getStudentCourseDetailRepo,
    getTeacherByUserIdRepo,
  }) => {
    const teacher = await getTeacherByUserIdRepo({
      userId,
    });
    if (!teacher) throw new AppError("استاد یافت نشد", 404);

    const studentCourseDetail = await getStudentCourseDetailRepo({
      id,
      teacherId: teacher.id,
    });

    if (!studentCourseDetail) throw new AppError("دوره دانشجو یافت نشد", 404);

    return {
      code: 200,
      data: studentCourseDetail,
    };
  };
