import { GetStudentCourseListRepo } from "../../../../core/modules/studentCourse/repo/student/getStudentCourseList.repo.js";
import prisma from "../../../prisma.js";

export const getStudentCourseListRepo: GetStudentCourseListRepo = async (
  { studentId, semesterId },
  tx
) => {
  const db = tx ?? prisma;

  return await db.studentCourse.findMany({
    where: {
      studentId,
      course: {
        semesterId,
      },
    },
    select: {
      id: true,
      score: true,
      status: true,
      course: {
        select: {
          id: true,
          number: true,
          canceled: true,
          examAt: true,
          lesson: {
            select: {
              id: true,
              title: true,
              coefficient: true,
              lessonType: true,
            },
          },
          times: {
            select: {
              day: true,
              time: true,
              classRoom: {
                select: {
                  number: true,
                },
              },
            },
          },
          teacher: {
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
      },
    },
  });
};
