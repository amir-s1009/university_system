import { AddressEntity } from "../entity/Address.entity.js";

export type EditAddressRepo = ({
  data,
}: {
  data: Partial<AddressEntity>;
}) => Promise<AddressEntity>;
