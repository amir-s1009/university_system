import { AddressEntity } from "../entity/Address.entity.js";

export type GetAddressRepo = ({
  id,
}: {
  id: string;
}) => Promise<AddressEntity | null>;
