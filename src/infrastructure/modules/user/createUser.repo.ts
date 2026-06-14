import { CreateUserRepo } from "../../../core/modules/user/repo/createUser.repo.js";
import prisma from "../../prisma.js";

export const createUserRepo: CreateUserRepo = async ({ data }, tx) => {
  const db = tx ?? prisma;

  return await db.user.create({
    data: {
      birthDate: data.birthDate,
      fatherName: data.fatherName,
      firstName: data.firstName,
      lastName: data.lastName,
      nationalCode: data.nationalCode,
      phoneNumber: data.phoneNumber,
      role: data.role,
      zipCode: data.zipCode,
      password: data.password,
    },
  });
};
