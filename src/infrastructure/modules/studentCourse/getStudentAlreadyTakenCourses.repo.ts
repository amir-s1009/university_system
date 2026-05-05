import { GetStudentAlreadyTakenCoursesRepo } from "../../../core/modules/studentCourse/repo/getStudentAlreadyTakenCourses.repo.js";
import prisma from "../../prisma.js";

export const getStudentAlreadyTakenCoursesRepo: GetStudentAlreadyTakenCoursesRepo =
  async ({ studentId, semesterId }, tx) => {
    const db = tx ?? prisma;

    return await db.studentCourse.findMany({
      where: {
        studentId,
        course: {
          semesterId,
        },
      },
      include: {
        course: {
          include: {
            lesson: true,
          },
        },
      },
    });
  };
