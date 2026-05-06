import { GetSemesterCalanderRepo } from "../../../core/modules/semesterCalander/repo/getSemesterCalander.repo.js";
import prisma from "../../prisma.js";

export const getSemesterCalanderRepo: GetSemesterCalanderRepo = async (
  { semesterId },
  tx
) => {
  const db = tx ?? prisma;

  return await db.semesterCalander.findUnique({
    where: {
      semesterId,
    },
  });
};
