import { EditScoreService } from "../../../../core/modules/studentCourse/service/teacher/editScrore.service.js";
import { AppError } from "../../../error.js";

export const editScoreService: EditScoreService = async ({
  data,
  userId,
  editStudentCourseRepo,
  getStudentCourseByIdRepo,
  getCourseByIdRepo,
  getTeacherByUserIdRepo,
}) => {
  const teacher = await getTeacherByUserIdRepo({
    userId,
  });
  if (!teacher) throw new AppError("استاد یافت نشد", 404);

  const studentCourse = await getStudentCourseByIdRepo({
    id: data.body.studentCourseId,
  });
  if (!studentCourse) throw new AppError("دوره دانشجو یافت نشد", 404);

  const course = await getCourseByIdRepo({
    id: studentCourse.courseId,
  });
  if (!course) throw new AppError("دوره مربوطه یافت نشد", 404);

  if (course.teacherId !== teacher.id)
    throw new AppError("شما فقط مجاز به ثبت نمره برای دوره خودتان هستید", 403);

  await editStudentCourseRepo({
    data: {
      id: data.body.studentCourseId,
      score: data.body.score,
    },
  });

  return {
    ok: true,
    code: 200,
    message: "نمره با موفقیت ویرایش گردید",
  };
};
