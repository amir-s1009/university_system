import { GetTeacherByUserIdRepo } from "../../../core/modules/teacher/repo/getTeacherByUserId.repo.js";
import prisma from "../../prisma.js";

export const getTeacherByUserIdRepo: GetTeacherByUserIdRepo = async (
  { userId },
  tx
) => {
  const db = tx ?? prisma;

  return await db.teacher.findFirst({
    where: {
      userId,
    },
  });
};
