import { CreateStudentCourseRepo } from "../../../core/modules/studentCourse/repo/createStudentCourse.repo.js";
import prisma from "../../prisma.js";

export const createStudentCourseRepo: CreateStudentCourseRepo = async (
  { data },
  tx
) => {
  const db = tx ?? prisma;

  return await db.studentCourse.create({
    data: {
      courseId: data.courseId,
      studentId: data.studentId,
      score: data.score,
      status: data.status,
    },
  });
};
