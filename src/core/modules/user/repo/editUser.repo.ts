import { TxClient } from "../../../../infrastructure/prisma.js";
import { UserEntity } from "../entity/User.entity.js";

export type EditUserRepo = (
  {
    data,
  }: {
    data: Partial<UserEntity>;
  },
  tx?: TxClient
) => Promise<UserEntity>;
