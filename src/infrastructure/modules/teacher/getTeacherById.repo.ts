import { GetTeacherByIdRepo } from "../../../core/modules/teacher/repo/getTeacherById.repo.js";
import prisma from "../../prisma.js";

export const getTeacherByIdRepo: GetTeacherByIdRepo = async ({ id }, tx) => {
  const db = tx ?? prisma;

  return await db.teacher.findUnique({
    where: {
      id,
    },
  });
};
