import { ROLE } from "@prisma/client";
import { UserEntity } from "../../../../user/entity/User.entity.js";

export type UserInfoEntity = Pick<
  UserEntity,
  "firstName" | "lastName" | "email"
> & {
  role: ROLE;
};
