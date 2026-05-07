import { Role } from "@prisma/client";
import { TJWT } from "../../../../types.js";

export type BuildJWTPayload = (user: { id: string; role: Role }) => TJWT;
