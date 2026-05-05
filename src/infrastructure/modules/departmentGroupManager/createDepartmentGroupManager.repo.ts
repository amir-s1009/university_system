import { CreateDepartmentGroupManagerRepo } from "../../../core/modules/departmentGroupManager/repo/createDepartmentGroupManager.repo.js";
import prisma from "../../prisma.js";

export const createDepartmentGroupManagerRepo: CreateDepartmentGroupManagerRepo =
  async ({ data }, tx) => {
    const db = tx ?? prisma;

    return await db.departmentGroupManager.create({
      data: {
        departmentGroupId: data.departmentGroupId,
        userId: data.userId,
      },
    });
  };
