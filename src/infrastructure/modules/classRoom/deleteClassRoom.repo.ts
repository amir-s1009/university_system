import { DeleteClassRoomRepo } from "../../../core/modules/classRoom/repo/deleteClassRoom.repo.js";
import prisma from "../../prisma.js";

export const deleteClassRoomRepo: DeleteClassRoomRepo = async ({ id }, tx) => {
  const db = tx ?? prisma;

  return await db.classRoom.delete({
    where: {
      id,
    },
  });
};
