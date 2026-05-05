import { CreateStudentRepo } from "../../../core/modules/student/repo/createStudent.repo.js";
import prisma from "../../prisma.js";

export const createStudentRepo: CreateStudentRepo = async ({ data }, tx) => {
  const db = tx ?? prisma;

  return await db.student.create({
    data: {
      studyMode: data.studyMode,
      departmentGroupId: data.departmentGroupId,
      enteranceSemesterId: data.enteranceSemesterId,
      userId: data.userId,
    },
  });
};
