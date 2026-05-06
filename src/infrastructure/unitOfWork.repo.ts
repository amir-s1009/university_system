import { UnitOfWorkRepo } from "../application/unitOfWork.repo.js";
import prisma from "./prisma.js";

export const unitOfWorkRepo: UnitOfWorkRepo = async (atomicProcedure) => {
  return await prisma.$transaction(async (tx) => {
    return await atomicProcedure(tx);
  });
};
