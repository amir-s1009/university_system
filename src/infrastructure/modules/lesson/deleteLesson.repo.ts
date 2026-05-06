import { DeleteLessonRepo } from "../../../core/modules/lesson/repo/deleteLesson.repo.js";
import prisma from "../../prisma.js";

export const deleteLessonRepo: DeleteLessonRepo = async ({ id }, tx) => {
  const db = tx ?? prisma;

  return await db.lesson.delete({
    where: {
      id,
    },
  });
};
