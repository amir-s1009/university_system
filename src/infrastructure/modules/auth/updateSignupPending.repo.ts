import { UpdateSignupPendingRepo } from "../../../core/modules/auth/repo/updateSignupPending.repo.js";
import prisma from "../../prisma.js";

export const updateSignupPendingRepo: UpdateSignupPendingRepo = async (
  { data },
  tx
) => {
  const db = tx ?? prisma;

  await db.signupPending.update({
    where: { email: data.email },
    data: {
      otp: data.otp,
      exp: data.exp,
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
      password: data.password,
      roleId: data.roleId,
    },
  });
};
