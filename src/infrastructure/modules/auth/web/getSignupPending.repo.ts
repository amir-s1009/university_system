import { GetSignupPendingRepo } from "../../../../core/modules/auth/repo/web/getSignupPending.repo.js";
import prisma from "../../../prisma.js";

export const getSignupPendingRepo: GetSignupPendingRepo = async (
  { email },
  tx
) => {
  const db = tx ?? prisma;

  return await db.signupPending.findFirst({
    where: {
      email,
    },
  });
};
