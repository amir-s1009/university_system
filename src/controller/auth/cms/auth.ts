import { loginService } from "../../../application/modules/auth/cms/login.service.js";
import { refreshTokenService } from "../../../application/modules/auth/cms/refreshToken.service.js";
import { loginSchema } from "../../../core/modules/auth/schema/cms/login.schema.js";
import { refreshTokenSchema } from "../../../core/modules/auth/schema/cms/refreshToken.schema.js";
import { buildJWTPayload } from "../../../core/modules/auth/utils/impl/buildJWTPayload.js";
import { signJwt } from "../../../core/modules/auth/utils/impl/signJWT.js";
import { verifyHash } from "../../../core/modules/auth/utils/impl/verifyHash.js";
import { verifyJwt } from "../../../core/modules/auth/utils/impl/verifyJWT.js";
import { TControllerProps } from "../../../core/types.js";
import { getUserByPhoneNumberRepo } from "../../../infrastructure/modules/user/cms/getUserByPhoneNumber.repo.js";
import { getUserRoleAndPermissionsByPhoneNumberRepo } from "../../../infrastructure/modules/user/cms/getUserRoleAndPermissionsByPhoneNumber.repo.js";
import { response } from "../../../utils/response.js";

export async function loginController({ req, res, next }: TControllerProps) {
  try {
    const body = req.body as loginSchema["body"];

    const result = await loginService({
      data: {
        phoneNumber: body.phoneNumber,
        password: body.password,
      },
      buildJWTPayload,
      signJwt,
      verifyHash,
      getUserByPhoneNumberRepo,
      getUserRoleAndPermissionsByPhoneNumberRepo,
    });

    return response(res, {
      code: 200,
      message: "با موفقیت وارد سیستم شدید.",
      data: result,
    });
  } catch (err) {
    return next(err);
  }
}

export async function refreshTokenController({
  req,
  res,
  next,
}: TControllerProps) {
  try {
    const { refreshToken } = req.body as refreshTokenSchema["body"];

    const result = await refreshTokenService({
      refreshToken,
      signJwt,
      verifyJwt,
    });

    return response(res, result);
  } catch (err) {
    return next(err);
  }
}
