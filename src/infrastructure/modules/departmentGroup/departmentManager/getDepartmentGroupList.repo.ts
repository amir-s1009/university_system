import { GetDepartmentGroupListRepo } from "../../../../core/modules/departmentGroup/repo/departmentManager/getDepartmentGroupList.repo.js";
import prisma from "../../../prisma.js";

export const getDepartmentGroupListRepo: GetDepartmentGroupListRepo = async (
  { departmentId },
  tx
) => {
  const db = tx ?? prisma;

  return await db.departmentGroup.findMany({
    where: {
      departmentId,
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
