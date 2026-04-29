import { SignJWT } from "jose";
import { SignJwt } from "../interface/signJWT.js";

export const signJwt: SignJwt = async (payload) => {
  const accessSecret = new TextEncoder().encode(
    process.env.ACCESS_TOKEN_KEY || ""
  );
  const refreshSecret = new TextEncoder().encode(
    process.env.REFRESH_TOKEN_KEY || ""
  );

  const accessToken = await new SignJWT(payload)
    .setProtectedHeader({ alg: process.env.JWT_ALGORITHM || "" })
    .setIssuedAt()
    .setExpirationTime(process.env.ACCESS_TOKEN_EXP || "")
    .sign(accessSecret);

  const refreshToken = await new SignJWT(payload)
    .setProtectedHeader({ alg: process.env.JWT_ALGORITHM || "" })
    .setIssuedAt()
    .setExpirationTime(process.env.REFRESH_TOKEN_EXP || "")
    .sign(refreshSecret);

  const data: { accessToken: string; refreshToken: string } = {
    accessToken,
    refreshToken,
  };

  return data;
};
