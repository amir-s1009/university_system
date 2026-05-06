import { GetClassRoomListRepo } from "../../../../core/modules/classRoom/repo/departmentManager/getClassRoomListItem.repo.js";
import prisma from "../../../prisma.js";

export const getClassRoomListRepo: GetClassRoomListRepo = async (
  { departmentId },
  tx
) => {
  const db = tx ?? prisma;

  return await db.classRoom.findMany({
    where: {
      departmentId,
    },
  });
};
