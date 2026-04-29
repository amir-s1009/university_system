import { RefreshTokenService } from "../../../../core/modules/auth/service/cms/refreshToken.service.js";
import { AppError } from "../../../error.js";

export const refreshTokenService: RefreshTokenService = async ({
  refreshToken,
  signJwt,
  verifyJwt,
}) => {
  const payload = await verifyJwt({
    token: refreshToken,
  });
  if (!payload)
    throw new AppError("توکن رفرش معتبر نیست یا منقضی شده است.", 401);

  const { accessToken: newAccessToken, refreshToken: newRefreshToken } =
    await signJwt(payload);

  return {
    code: 200,
    data: {
      accessToken: newAccessToken,
      refreshToken: newRefreshToken,
    },
  };
};
