import { TxClient } from "../../../../infrastructure/prisma.js";

export type DeleteSignupPendingRepo = (
  {
    email,
  }: {
    email: string;
  },
  tx?: TxClient
) => Promise<void>;
