import { GetCourseByIdRepo } from "../../../core/modules/course/repo/getCourseById.repo.js";
import prisma from "../../prisma.js";

export const getCourseByIdRepo: GetCourseByIdRepo = async ({ id }, tx) => {
  const db = tx ?? prisma;

  return await db.course.findUnique({
    where: {
      id,
    },
  });
};
