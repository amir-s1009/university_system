import { DeleteSignupPendingRepo } from "../../../core/modules/auth/repo/deleteSignupPending.repo.js";
import prisma from "../../prisma.js";

export const deleteSignupPendingRepo: DeleteSignupPendingRepo = async (
  { email },
  tx
) => {
  const db = tx ?? prisma;

  await db.signupPending.delete({
    where: {
      email,
    },
  });
};
