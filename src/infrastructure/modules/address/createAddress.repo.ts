import { CreateAddressRepo } from "../../../core/modules/address/repo/createAddress.repo.js";
import prisma from "../../prisma.js";

export const createAddressRepo: CreateAddressRepo = async ({ data }, tx) => {
  const db = tx ?? prisma;

  return await db.address.create({
    data: {
      province: data.province,
      city: data.city,
      route: data.route,
      userId: data.userId,
    },
  });
};
