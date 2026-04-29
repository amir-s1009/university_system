import { TxClient } from "../../../../../infrastructure/prisma.js";
import { SignupPendingEntity } from "../../entity/SignupPending.entity.js";

export type GetSignupPendingRepo = (
  {
    email,
  }: {
    email: string;
  },
  tx?: TxClient
) => Promise<SignupPendingEntity | null>;
