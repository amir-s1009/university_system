import { GetStudentByUserIdRepo } from "../../../core/modules/student/repo/getStudentByUserId.repo.js";
import prisma from "../../prisma.js";

export const getStudentByUserIdRepo: GetStudentByUserIdRepo = async (
  { userId },
  tx
) => {
  const db = tx ?? prisma;

  return await db.student.findFirst({
    where: {
      userId,
    },
  });
};
