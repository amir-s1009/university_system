import { TxClient } from "../../../../infrastructure/prisma.js";
import { SignupPendingEntity } from "../entity/SignupPending.entity.js";

export type CreateSignupPendingRepo = (
  {
    data,
  }: {
    data: Pick<
      SignupPendingEntity,
      "email" | "exp" | "firstName" | "lastName" | "otp" | "password" | "roleId"
    >;
  },
  tx?: TxClient
) => Promise<void>;
