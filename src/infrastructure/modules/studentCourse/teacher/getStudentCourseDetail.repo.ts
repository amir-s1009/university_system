import { GetStudentCourseDetailRepo } from "../../../../core/modules/studentCourse/repo/teacher/getStudentCourseDetail.repo.js";
import prisma from "../../../prisma.js";

export const getStudentCourseDetailRepo: GetStudentCourseDetailRepo = async (
  { id, teacherId },
  tx
) => {
  const db = tx ?? prisma;

  return await db.studentCourse.findUnique({
    where: {
      id,
      course: {
        teacherId,
      },
    },
    select: {
      id: true,
      score: true,
      status: true,
      student: {
        select: {
          id: true,
          studyMode: true,
          status: true,
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
