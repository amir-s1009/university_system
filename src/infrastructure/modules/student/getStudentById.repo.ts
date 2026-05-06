import { GetStudentByIdRepo } from "../../../core/modules/student/repo/getStudentById.repo.js";
import prisma from "../../prisma.js";

export const getStudentByIdRepo: GetStudentByIdRepo = async ({ id }, tx) => {
  const db = tx ?? prisma;

  return await db.student.findUnique({
    where: { id },
  });
};
