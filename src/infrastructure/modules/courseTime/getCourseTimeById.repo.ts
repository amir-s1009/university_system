import { GetCourseTimeByIdRepo } from "../../../core/modules/courseTime/repo/getCourseTimeById.repo.js";
import prisma from "../../prisma.js";

export const getCourseTimeByIdRepo: GetCourseTimeByIdRepo = async (
  { id },
  tx
) => {
  const db = tx ?? prisma;

  return await db.courseTime.findUnique({
    where: {
      id,
    },
  });
};
