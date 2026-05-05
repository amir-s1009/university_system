import { TxClient } from "../../../../infrastructure/prisma.js";
import { AddressEntity } from "../entity/Address.entity.js";

export type CreateAddressRepo = (
  {
    data,
  }: {
    data: Pick<AddressEntity, "province" | "city" | "route" | "userId">;
  },
  tx?: TxClient
) => Promise<AddressEntity>;
