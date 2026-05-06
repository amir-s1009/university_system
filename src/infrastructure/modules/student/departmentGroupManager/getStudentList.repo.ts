import { GetStudentListRepo } from "../../../../core/modules/student/repo/departmentGroupManager/getStudentList.repo.js";
import prisma from "../../../prisma.js";

export const getStudentListRepo: GetStudentListRepo = async (
  { departmentGroupId },
  tx
) => {
  const db = tx ?? prisma;

  return await db.student.findMany({
    where: {
      departmentGroupId,
    },
    select: {
      id: true,
      status: true,
      studyMode: true,
      user: {
        select: {
          firstName: true,
          lastName: true,
          phoneNumber: true,
        },
      },
    },
  });
};
