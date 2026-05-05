import { GetClassRoomByIdRepo } from "../../../core/modules/classRoom/repo/getClassRoomById.repo.js";
import prisma from "../../prisma.js";

export const getClassRoomByIdRepo: GetClassRoomByIdRepo = async (
  { id },
  tx
) => {
  const db = tx ?? prisma;

  return await db.classRoom.findUnique({
    where: {
      id,
    },
  });
};
