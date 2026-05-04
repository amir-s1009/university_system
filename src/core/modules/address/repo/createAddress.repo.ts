import { AddressEntity } from "../entity/Address.entity.js";

export type CreateAddressRepo = ({}: {
  data: Pick<AddressEntity, "province" | "city" | "route" | "userId">;
}) => Promise<AddressEntity>;
