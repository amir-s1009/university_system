import { DisconnectDepartmentGroupFromTeacherRepo } from "../../../core/modules/departmentGroup/repo/disconnectDepartmentGroupFromTeacher.repo.js";
import prisma from "../../prisma.js";

export const disconnectDepartmentGroupFromTeacherRepo: DisconnectDepartmentGroupFromTeacherRepo =
  async ({ departmentGroupId, teacherId }, tx) => {
    const db = tx ?? prisma;

    await db.teacher.update({
      where: {
        id: teacherId,
      },
      data: {
        departmentGroups: {
          disconnect: {
            id: departmentGroupId,
          },
        },
      },
    });
  };
