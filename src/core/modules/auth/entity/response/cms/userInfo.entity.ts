import { ROLE } from "@prisma/client";
import { UserEntity } from "../../../../user/entity/User.entity.js";
import { PermissionEntity } from "../../../../permission/entity/permission.entity.js";

export type UserInfoEntity = Pick<
  UserEntity,
  | "firstName"
  | "lastName"
  | "phoneNumber"
  | "createdAt"
  | "avatar"
  | "isActive"
  | "id"
> & {
  role: {
    name: ROLE;
    permissions: PermissionEntity[];
  };
};
