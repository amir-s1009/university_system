import { ROLE } from "@prisma/client";
import { TJWT } from "../../../../types.js";

export type BuildJWTPayload = (user: {
  id: string;
  role: {
    name: ROLE;
    permissions: {
      name: string;
    }[];
  };
}) => TJWT;
