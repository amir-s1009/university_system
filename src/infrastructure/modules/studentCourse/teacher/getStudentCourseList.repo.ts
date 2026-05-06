import { GetStudentCourseListRepo } from "../../../../core/modules/studentCourse/repo/teacher/getStudentCourseList.repo.js";
import prisma from "../../../prisma.js";

export const getStudentCourseListRepo: GetStudentCourseListRepo = async (
  { courseId, teacherId },
  tx
) => {
  const db = tx ?? prisma;

  return await db.studentCourse.findMany({
    where: {
      course: {
        id: courseId,
        teacherId,
      },
    },
    select: {
      id: true,
      score: true,
      status: true,
      student: {
        select: {
          user: {
            select: {
              firstName: true,
              lastName: true,
            },
          },
        },
      },
    },
  });
};
