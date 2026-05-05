import { GetDepartmentGroupListRepo } from "../../../../core/modules/departmentGroup/repo/teacher/getDepartmentGroupList.repo.js";
import prisma from "../../../prisma.js";

export const getDepartmentGroupListRepo: GetDepartmentGroupListRepo = async (
  { teacherId },
  tx
) => {
  const db = tx ?? prisma;

  return await db.departmentGroup.findMany({
    where: {
      teachers: {
        some: {
          id: teacherId,
        },
      },
    },
  });
};
