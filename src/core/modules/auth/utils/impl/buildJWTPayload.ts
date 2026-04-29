import { PERMISSION } from "../../../permission/constant/permissions.js";
import { BuildJWTPayload } from "../interface/buildJWTPayload.js";

export const buildJWTPayload: BuildJWTPayload = (user) => {
  return {
    id: user.id,
    role: user.role.name,
    perms: user.role.permissions.map((p) => p.name as keyof typeof PERMISSION),
  };
};
