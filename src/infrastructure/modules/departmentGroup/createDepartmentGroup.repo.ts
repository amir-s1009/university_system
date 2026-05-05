import { CreateDepartmentGroupRepo } from "../../../core/modules/departmentGroup/repo/createDepartmentGroup.repo.js";
import prisma from "../../prisma.js";

export const createDepartmentGroupRepo: CreateDepartmentGroupRepo = async (
  { data },
  tx
) => {
  const db = tx ?? prisma;

  return await db.departmentGroup.create({
    data: {
      title: data.title,
      departmentId: data.departmentId,
    },
  });
};
