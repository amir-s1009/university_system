import { TxClient } from "../../../../infrastructure/prisma.js";
import { AddressEntity } from "../entity/Address.entity.js";

export type GetAddressByIdRepo = (
  {
    id,
  }: {
    id: string;
  },
  tx?: TxClient
) => Promise<AddressEntity | null>;
