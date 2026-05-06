import { EditDepartmentGroupManagerRepo } from "../../../core/modules/departmentGroupManager/repo/editDepartmentGroupManager.repo.js";
import prisma from "../../prisma.js";

export const editDepartmentGroupManagerRepo: EditDepartmentGroupManagerRepo =
  async ({ data }, tx) => {
    const db = tx ?? prisma;

    return await db.departmentGroupManager.update({
      where: {
        id: data.id,
      },
      data: {
        departmentGroupId: data.departmentGroupId,
        userId: data.userId,
      },
    });
  };
