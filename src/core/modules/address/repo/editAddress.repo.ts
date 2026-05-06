import { TxClient } from "../../../../infrastructure/prisma.js";
import { AddressEntity } from "../entity/Address.entity.js";

export type EditAddressRepo = (
  {
    data,
  }: {
    data: Partial<AddressEntity>;
  },
  tx?: TxClient
) => Promise<AddressEntity>;
