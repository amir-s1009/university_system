import { EditStudentCourseRepo } from "../../../core/modules/studentCourse/repo/editStudentCourse.repo.js";
import prisma from "../../prisma.js";

export const editStudentCourseRepo: EditStudentCourseRepo = async (
  { data },
  tx
) => {
  const db = tx ?? prisma;

  return await db.studentCourse.update({
    where: {
      id: data.id,
    },
    data: {
      courseId: data.courseId,
      score: data.score,
      status: data.status,
      studentId: data.studentId,
    },
  });
};
