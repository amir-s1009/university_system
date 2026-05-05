import { GetDepartmentGroupDetailRepo } from "../../../../core/modules/departmentGroup/repo/departmentManager/getDepartmentGroupDetail.repo.js";
import prisma from "../../../prisma.js";

export const getDepartmentGroupDetailRepo: GetDepartmentGroupDetailRepo =
  async ({ id }, tx) => {
    const db = tx ?? prisma;

    return await db.departmentGroup.findUnique({
      where: {
        id,
      },
      include: {
        manager: {
          select: {
            user: {
              select: {
                id: true,
                firstName: true,
                lastName: true,
              },
            },
          },
        },
      },
    });
  };
