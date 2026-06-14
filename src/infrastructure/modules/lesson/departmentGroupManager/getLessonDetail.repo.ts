import { GetLessonDetailRepo } from "../../../../core/modules/lesson/repo/departmentGroupManager/getLessonDetail.repo.js";
import prisma from "../../../prisma.js";

export const getLessonDetailRepo: GetLessonDetailRepo = async ({ id }, tx) => {
  const db = tx ?? prisma;

  return await db.lesson.findUnique({
    where: {
      id,
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
