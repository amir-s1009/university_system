import { EditStudentRepo } from "../../../core/modules/student/repo/editStudent.repo.js";
import prisma from "../../prisma.js";

export const editStudentRepo: EditStudentRepo = async ({ data }, tx) => {
  const db = tx ?? prisma;

  return await db.student.update({
    where: {
      id: data.id,
    },
    data: {
      departmentGroupId: data.departmentGroupId,
      enteranceSemesterId: data.enteranceSemesterId,
      status: data.status,
      studyMode: data.studyMode,
      userId: data.userId,
    },
  });
};
