import { DeleteCourseTimeRepo } from "../../../core/modules/courseTime/repo/deleteCourseTime.repo.js";
import prisma from "../../prisma.js";

export const deleteCourseTimeRepo: DeleteCourseTimeRepo = async (
  { id },
  tx
) => {
  const db = tx ?? prisma;

  return await db.courseTime.delete({
    where: {
      id,
    },
  });
};
