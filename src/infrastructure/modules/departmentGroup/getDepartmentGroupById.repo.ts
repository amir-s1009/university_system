import { GetDepartmentGroupByIdRepo } from "../../../core/modules/departmentGroup/repo/getDepartmentGroupById.repo.js";
import prisma from "../../prisma.js";

export const getDepartmentGroupByIdRepo: GetDepartmentGroupByIdRepo = async (
  { id },
  tx
) => {
  const db = tx ?? prisma;

  return await db.departmentGroup.findUnique({
    where: {
      id,
    },
  });
};
