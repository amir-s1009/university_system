import { GetStudentCourseListService } from "../../../../core/modules/studentCourse/service/teacher/getStudentCourseList.service.js";
import { AppError } from "../../../error.js";

export const getStudentCourseListService: GetStudentCourseListService = async ({
  data,
  userId,
  getStudentCourseListRepo,
  getTeacherByUserIdRepo,
}) => {
  const teacher = await getTeacherByUserIdRepo({
    userId,
  });
  if (!teacher) throw new AppError("استاد یافت نشد", 404);

  const studentCourseList = await getStudentCourseListRepo({
    courseId: data.queries.courseId,
    teacherId: teacher.id,
  });

  return {
    code: 200,
    data: studentCourseList,
  };
};
