import { EditAddressRepo } from "../../../core/modules/address/repo/editAddress.repo.js";
import prisma from "../../prisma.js";

export const editAddressRepo: EditAddressRepo = async ({ data }, tx) => {
  const db = tx ?? prisma;

  return await db.address.update({
    where: {
      id: data.id,
    },
    data: {
      province: data.province,
      city: data.city,
      route: data.route,
      userId: data.userId,
    },
  });
};
