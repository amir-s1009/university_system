import { GetTeacherDetailRepo } from "../../../../core/modules/teacher/repo/departmentManager/getTeacherDetail.repo.js";
import prisma from "../../../prisma.js";

export const getTeacherDetailRepo: GetTeacherDetailRepo = async (
  { id },
  tx
) => {
  const db = tx ?? prisma;

  return await db.teacher.findUnique({
    where: {
      id,
    },
    select: {
      id: true,
      user: {
        select: {
          id: true,
          firstName: true,
          lastName: true,
          fatherName: true,
          nationalCode: true,
          zipCode: true,
          address: true,
        },
      },
      departmentGroups: {
        select: {
          id: true,
          title: true,
          manager: {
            select: {
              user: {
                select: {
                  firstName: true,
                  lastName: true,
                },
              },
            },
          },
        },
      },
    },
  });
};
