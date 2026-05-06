import { GetCourseTimeListByCourseIdRepo } from "../../../core/modules/courseTime/repo/getCourseTimeListByCourseId.repo.js";
import prisma from "../../prisma.js";

export const getCourseTimeListByCourseIdRepo: GetCourseTimeListByCourseIdRepo =
  async ({ courseId }, tx) => {
    const db = tx ?? prisma;

    return await db.courseTime.findMany({
      where: {
        courseId,
      },
    });
  };
