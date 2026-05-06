import { GetLessonByIdRepo } from "../../../core/modules/lesson/repo/getLessonById.repo.js";
import prisma from "../../prisma.js";

export const getLessonByIdRepo: GetLessonByIdRepo = async ({ id }, tx) => {
  const db = tx ?? prisma;

  return await db.lesson.findUnique({
    where: {
      id,
    },
  });
};
