import { GetAddressByIdRepo } from "../../../core/modules/address/repo/getAddressById.repo.js";
import prisma from "../../prisma.js";

export const getAddressByIdRepo: GetAddressByIdRepo = async ({ id }, tx) => {
  const db = tx ?? prisma;

  return await db.address.findUnique({
    where: {
      id,
    },
  });
};
