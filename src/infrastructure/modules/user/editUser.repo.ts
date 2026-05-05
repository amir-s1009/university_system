import { EditUserRepo } from "../../../core/modules/user/repo/editUser.repo.js";
import prisma from "../../prisma.js";

export const editUserRepo: EditUserRepo = async ({ data }, tx) => {
  const db = tx ?? prisma;

  return await db.user.update({
    where: {
      id: data.id,
    },
    data: {
      birthDate: data.birthDate,
      fatherName: data.fatherName,
      firstName: data.firstName,
      lastName: data.lastName,
      nationalCode: data.nationalCode,
      phoneNumber: data.phoneNumber,
      zipCode: data.zipCode,
      role: data.role,
    },
  });
};
