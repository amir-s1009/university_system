import { CreateClassRoomRepo } from "../../../core/modules/classRoom/repo/createClassRoom.repo.js";
import prisma from "../../prisma.js";

export const createClassRoomRepo: CreateClassRoomRepo = async (
  { data },
  tx
) => {
  const db = tx ?? prisma;

  return await db.classRoom.create({
    data: {
      number: data.number,
      departmentId: data.departmentId,
    },
  });
};
