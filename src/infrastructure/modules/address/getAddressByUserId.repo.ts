import { GetAddressByUserIdRepo } from "../../../core/modules/address/repo/getAddressByUserId.repo.js";
import prisma from "../../prisma.js";

export const getAddressByUserIdRepo: GetAddressByUserIdRepo = async (
  { userId },
  tx
) => {
  const db = tx ?? prisma;

  return await db.address.findFirst({
    where: {
      userId,
    },
  });
};
