import { GetDepartmentGroupManagerByIdRepo } from "../../../core/modules/departmentGroupManager/repo/getDepartmentGroupManagerById.repo.js";
import prisma from "../../prisma.js";

export const getDepartmentGroupManagerByIdRepo: GetDepartmentGroupManagerByIdRepo =
  async ({ id }, tx) => {
    const db = tx ?? prisma;

    return await db.departmentGroupManager.findUnique({
      where: {
        id,
      },
    });
  };
