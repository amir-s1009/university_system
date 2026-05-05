import { ConnectDepartmentGroupToTeacherRepo } from "../../../core/modules/departmentGroup/repo/connectDepartmentGroupToTeacher.repo.js";
import prisma from "../../prisma.js";

export const connectDepartmentGroupToTeacherRepo: ConnectDepartmentGroupToTeacherRepo =
  async ({ departmentGroupId, teacherId }, tx) => {
    const db = tx ?? prisma;

    await db.teacher.update({
      where: {
        id: teacherId,
      },
      data: {
        departmentGroups: {
          connect: {
            id: departmentGroupId,
          },
        },
      },
    });
  };
