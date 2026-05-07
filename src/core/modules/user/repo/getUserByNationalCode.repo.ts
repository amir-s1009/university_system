import { TxClient } from "../../../../infrastructure/prisma.js";
import { UserEntity } from "../entity/User.entity.js";

export type GetUserByNationalCodeRepo = (
  {
    nationalCode,
  }: {
    nationalCode: string;
  },
  tx?: TxClient
) => Promise<UserEntity | null>;
