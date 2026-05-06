import { DeleteCourseRepo } from "../../../core/modules/course/repo/deleteCourse.repo.js";
import prisma from "../../prisma.js";

export const deleteCourseRepo: DeleteCourseRepo = async ({ id }, tx) => {
  const db = tx ?? prisma;

  return await db.course.delete({
    where: {
      id,
    },
  });
};
