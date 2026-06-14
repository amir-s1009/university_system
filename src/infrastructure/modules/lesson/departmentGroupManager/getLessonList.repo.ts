import { GetLessonListRepo } from "../../../../core/modules/lesson/repo/departmentGroupManager/getLessonList.repo.js";
import prisma from "../../../prisma.js";

export const getLessonListRepo: GetLessonListRepo = async (
  { departmentGroupId },
  tx
) => {
  const db = tx ?? prisma;

  return await db.lesson.findMany({
    where: {
      departmentGroupId,
    },
    select: {
      id: true,
      coefficient: true,
      lessonType: true,
      title: true,
      departmentGroupId: true,
    },
  });
};
