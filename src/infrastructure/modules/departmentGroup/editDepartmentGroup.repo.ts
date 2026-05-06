import { EditDepartmentGroupRepo } from "../../../core/modules/departmentGroup/repo/editDepartmentGroup.repo.js";
import prisma from "../../prisma.js";

export const editDepartmentGroupRepo: EditDepartmentGroupRepo = async (
  { data },
  tx
) => {
  const db = tx ?? prisma;

  return await db.departmentGroup.update({
    where: {
      id: data.id,
    },
    data: {
      departmentId: data.departmentId,
      title: data.title,
    },
  });
};
