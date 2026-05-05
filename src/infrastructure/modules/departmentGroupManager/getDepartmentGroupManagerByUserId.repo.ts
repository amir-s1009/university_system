import { GetDepartmentGroupManagerByUserIdRepo } from "../../../core/modules/departmentGroupManager/repo/getDepartmentGroupManagerByUserId.repo.js";
import prisma from "../../prisma.js";

export const getDepartmentGroupManagerByUserIdRepo: GetDepartmentGroupManagerByUserIdRepo =
  async ({ userId }, tx) => {
    const db = tx ?? prisma;

    return await db.departmentGroupManager.findUnique({
      where: {
        userId,
      },
    });
  };
