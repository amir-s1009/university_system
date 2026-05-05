import { DeleteStudentRepo } from "../../../core/modules/student/repo/deleteStudent.repo.js";
import prisma from "../../prisma.js";

export const deleteStudentRepo: DeleteStudentRepo = async ({ id }, tx) => {
  const db = tx ?? prisma;

  return await db.student.delete({
    where: {
      id,
    },
  });
};
