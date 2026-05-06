import { DeleteTeacherRepo } from "../../../core/modules/teacher/repo/deleteTeacher.repo.js";
import prisma from "../../prisma.js";

export const deleteTeacherRepo: DeleteTeacherRepo = async ({ id }, tx) => {
  const db = tx ?? prisma;

  return await db.teacher.delete({
    where: {
      id,
    },
  });
};
