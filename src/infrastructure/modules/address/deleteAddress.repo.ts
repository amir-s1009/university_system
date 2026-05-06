import { DeleteAddressRepo } from "../../../core/modules/address/repo/deleteAddress.repo.js";
import prisma from "../../prisma.js";

export const deleteAddressRepo: DeleteAddressRepo = async ({ id }, tx) => {
  const db = tx ?? prisma;

  return await db.address.delete({
    where: {
      id,
    },
  });
};
