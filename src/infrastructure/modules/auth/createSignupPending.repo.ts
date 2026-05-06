import { CreateSignupPendingRepo } from "../../../core/modules/auth/repo/createSignupPending.repo.js";
import prisma from "../../prisma.js";

export const createSignupPendingRepo: CreateSignupPendingRepo = async (
  { data },
  tx
) => {
  const db = tx ?? prisma;
  await db.signupPending.create({
    data: {
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
      password: data.password,
      roleId: data.roleId,
      otp: data.otp,
      exp: data.exp,
    },
  });
};
