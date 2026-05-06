import { EditLessonRepo } from "../../../core/modules/lesson/repo/editLesson.repo.js";
import prisma from "../../prisma.js";

export const editLessonRepo: EditLessonRepo = async ({ data }, tx) => {
  const db = tx ?? prisma;

  return await db.lesson.update({
    where: {
      id: data.id,
    },
    data: {
      title: data.title,
      coefficient: data.coefficient,
      lessonType: data.lessonType,
      departmentGroupId: data.departmentGroupId,
    },
  });
};
