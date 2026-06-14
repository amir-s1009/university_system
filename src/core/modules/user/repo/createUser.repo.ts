import { TxClient } from "../../../../infrastructure/prisma.js";
import { UserEntity } from "../entity/User.entity.js";

export type CreateUserRepo = (
  {
    data,
  }: {
    data: Pick<
      UserEntity,
      | "firstName"
      | "lastName"
      | "fatherName"
      | "nationalCode"
      | "phoneNumber"
      | "role"
      | "zipCode"
      | "birthDate"
      | "password"
    >;
  },
  tx?: TxClient
) => Promise<UserEntity>;
