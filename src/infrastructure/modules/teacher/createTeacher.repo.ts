import { CreateTeacherRepo } from "../../../core/modules/teacher/repo/createTeacher.repo.js";
import prisma from "../../prisma.js";

export const createTeacherRepo: CreateTeacherRepo = async ({ data }, tx) => {
  const db = tx ?? prisma;

  return await db.teacher.create({
    data: {
      userId: data.userId,
    },
  });
};
