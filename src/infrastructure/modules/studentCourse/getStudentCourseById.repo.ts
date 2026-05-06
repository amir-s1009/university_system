import { GetStudentCourseByIdRepo } from "../../../core/modules/studentCourse/repo/getStudentCourseById.repo.js";
import prisma from "../../prisma.js";

export const getStudentCourseByIdRepo: GetStudentCourseByIdRepo = async (
  { id },
  tx
) => {
  const db = tx ?? prisma;

  return await db.studentCourse.findUnique({
    where: {
      id,
    },
  });
};
