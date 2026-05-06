import { CreateLessonRepo } from "../../../core/modules/lesson/repo/createLesson.repo.js";
import prisma from "../../prisma.js";

export const createLessonRepo: CreateLessonRepo = async ({ data }, tx) => {
  const db = tx ?? prisma;

  return await db.lesson.create({
    data: {
      title: data.title,
      coefficient: data.coefficient,
      lessonType: data.lessonType,
      departmentGroupId: data.departmentGroupId,
    },
  });
};
