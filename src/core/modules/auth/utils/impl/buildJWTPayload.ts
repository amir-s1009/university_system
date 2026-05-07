import { BuildJWTPayload } from "../interface/buildJWTPayload.js";

export const buildJWTPayload: BuildJWTPayload = (user) => {
  return {
    id: user.id,
    role: user.role,
  };
};
