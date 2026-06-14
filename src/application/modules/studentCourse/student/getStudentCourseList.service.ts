import { GetStudentCourseListService } from "../../../../core/modules/studentCourse/service/student/getStudentCourseList.service.js";
import { AppError } from "../../../error.js";

export const getStudentCourseListService: GetStudentCourseListService = async ({
  data,
  userId,
  getStudentCourseListRepo,
  getStudentByUserIdRepo,
}) => {
  const student = await getStudentByUserIdRepo({
    userId,
  });
  if (!student) throw new AppError("دانشجو یافت نشد", 404);

  const studentCourseList = await getStudentCourseListRepo({
    studentId: student.id,
    semesterId: data.queries.semesterId,
  });

  return {
    ok: true,
    code: 200,
    data: studentCourseList,
  };
};
