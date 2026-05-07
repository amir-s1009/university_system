import { GetUserByNationalCodeRepo } from "../../../core/modules/user/repo/getUserByNationalCode.repo.js";
import prisma from "../../prisma.js";

export const getUserByNationalCodeRepo: GetUserByNationalCodeRepo = async (
  { nationalCode },
  tx
) => {
  const db = tx ?? prisma;

  return await db.user.findFirst({
    where: {
      nationalCode,
    },
  });
};
