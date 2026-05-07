import { GetUserInfoRepo } from "../../../core/modules/user/repo/getUserInfo.repo.js";
import prisma from "../../prisma.js";

export const getUserInfoRepo: GetUserInfoRepo = async ({ id }, tx) => {
  const db = tx ?? prisma;

  return await db.user.findUnique({
    where: {
      id,
    },
    select: {
      id: true,
      firstName: true,
      lastName: true,
      fatherName: true,
      nationalCode: true,
      phoneNumber: true,
    },
  });
};
