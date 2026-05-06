import { EditTeacherRepo } from "../../../core/modules/teacher/repo/editTeacher.repo.js";
import prisma from "../../prisma.js";

export const editTeacherRepo: EditTeacherRepo = async ({ data }, tx) => {
  const db = tx ?? prisma;

  return await db.teacher.update({
    where: {
      id: data.id,
    },
    data: {
      userId: data.userId,
    },
  });
};
