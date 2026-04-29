import { TxClient } from "../../../../infrastructure/prisma.js";
import { SignupPendingEntity } from "../entity/SignupPending.entity.js";

export type UpdateSignupPendingRepo = (
  {
    data,
  }: {
    data: Partial<
      Pick<
        SignupPendingEntity,
        | "email"
        | "exp"
        | "otp"
        | "firstName"
        | "lastName"
        | "password"
        | "roleId"
      >
    >;
  },
  tx?: TxClient
) => Promise<void>;
