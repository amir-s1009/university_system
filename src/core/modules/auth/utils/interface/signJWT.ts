import { TJWT } from "../../../../types.js";

export type SignJwt = (payload: TJWT) => Promise<{
  accessToken: string;
  refreshToken: string;
}>;
