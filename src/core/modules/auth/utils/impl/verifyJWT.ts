import { jwtVerify } from "jose";
import { TJWT } from "../../../../types.js";
import { VerifyJwt } from "../interface/verifyJWT.js";

export const verifyJwt: VerifyJwt = async ({ token }) => {
  const refreshSecret = new TextEncoder().encode(
    process.env.REFRESH_TOKEN_KEY || ""
  );
  let payload: TJWT | undefined;
  try {
    const { payload: verified } = await jwtVerify(token, refreshSecret);
    payload = verified as TJWT;
  } catch (err: any) {
  } finally {
    return payload;
  }
};
