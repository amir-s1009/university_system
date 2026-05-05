import { GetTeacherListRepo } from "../../../../core/modules/teacher/repo/departmentManager/getTeacherList.repo.js";
import prisma from "../../../prisma.js";

export const getTeacherListRepo: GetTeacherListRepo = async (
  { departmentId },
  tx
) => {
  const db = tx ?? prisma;

  return await db.teacher.findMany({
    where: {
      departmentGroups: {
        some: {
          departmentId,
        },
      },
    },
    select: {
      id: true,
      user: {
        select: {
          id: true,
          nationalCode: true,
          firstName: true,
          lastName: true,
        },
      },
    },
  });
};
