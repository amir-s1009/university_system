import { GetLessonPrerequisitesRepo } from "../../../core/modules/lesson/repo/getLessonPrerequisites.repo.js";
import prisma from "../../prisma.js";

export const getLessonPrerequisitesRepo: GetLessonPrerequisitesRepo = async (
  { id },
  tx
) => {
  const db = tx ?? prisma;

  const lesson = await db.lesson.findUnique({
    where: {
      id,
    },
    select: {
      prerequisites: true,
    },
  });

  if (!lesson) return [];

  return lesson.prerequisites;
};
