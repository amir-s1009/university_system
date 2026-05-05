import { TxClient } from "../../../../infrastructure/prisma.js";
import { AddressEntity } from "../entity/Address.entity.js";

export type GetAddressByUserIdRepo = (
  {
    userId,
  }: {
    userId: string;
  },
  tx?: TxClient
) => Promise<AddressEntity | null>;
