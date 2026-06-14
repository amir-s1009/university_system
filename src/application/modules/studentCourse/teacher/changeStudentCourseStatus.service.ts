import { StudentCourseStatus } from "@prisma/client";
import { ChangeStudentCourseStatusService } from "../../../../core/modules/studentCourse/service/teacher/changeStudentCourseStatus.service.js";
import { AppError } from "../../../error.js";

export const changeStudentCourseStatusService: ChangeStudentCourseStatusService =
  async ({
    data,
    userId,
    editStudentCourseRepo,
    getStudentCourseByIdRepo,
    getTeacherByUserIdRepo,
    getCourseByIdRepo,
  }) => {
    const teacher = await getTeacherByUserIdRepo({
      userId,
    });
    if (!teacher) throw new AppError("استاد یافت نشد", 404);

    const studentCourse = await getStudentCourseByIdRepo({
      id: data.body.id,
    });
    if (!studentCourse) throw new AppError("دوره دانشجو یافت نشد", 404);

    const course = await getCourseByIdRepo({
      id: studentCourse.courseId,
    });
    if (!course) throw new AppError("دوره مربوطه یافت نشد", 404);

    if (course.teacherId !== teacher.id)
      throw new AppError(
        "شما فقط مجاز به تغغیر وضعیت دوره های دانشجویان خود هستید",
        403
      );

    if (
      data.body.status !== StudentCourseStatus.SCORED_PERMENANTLY &&
      data.body.status !== StudentCourseStatus.SCORED_TEMPRORILY &&
      data.body.status !== StudentCourseStatus.TEACHER_REMOVED_STUDENT
    )
      throw new AppError("شما مجاز به تغییر به وضعیت مد نظر نیستید", 403);

    await editStudentCourseRepo({
      data: {
        id: data.body.id,
        status: data.body.status,
      },
    });

    return {
      ok: true,
      code: 200,
      message: "دوره دانشجو با موفقیت تغییر وضعیت یافت",
    };
  };
