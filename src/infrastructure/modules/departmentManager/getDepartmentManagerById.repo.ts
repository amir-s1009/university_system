import { GetDepartmentManagerByUserIdRepo } from "../../../core/modules/departmentManager/repo/getDepartmentManagerByUserId.repo.js";
import prisma from "../../prisma.js";

export const getDepartmentManagerByUserIdRepo: GetDepartmentManagerByUserIdRepo =
  async ({ userId }, tx) => {
    const db = tx ?? prisma;

    return await db.departmentManager.findFirst({
      where: {
        userId,
      },
    });
  };
