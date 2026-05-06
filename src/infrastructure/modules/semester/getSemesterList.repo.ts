import { GetSemesterListRepo } from "../../../core/modules/semester/repo/getSemesterList.repo.js";
import prisma from "../../prisma.js";

export const getSemesterListRepo: GetSemesterListRepo = async (tx) => {
  const db = tx ?? prisma;

  return await db.semester.findMany();
};
