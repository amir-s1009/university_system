import { GetTeacherDepartmentGroupListRepo } from "../../../core/modules/teacher/repo/getTeacherDepartmentGroupList.repo.js";
import prisma from "../../prisma.js";

export const getTeacherDepartmentGroupListRepo: GetTeacherDepartmentGroupListRepo =
  async ({ teacherId }, tx) => {
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
