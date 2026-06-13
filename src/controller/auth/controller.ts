import { loginService } from "../../application/modules/auth/login.service.js";
import { loginSchema } from "../../core/modules/auth/schema/login.schema.js";
import { buildJWTPayload } from "../../core/modules/auth/utils/impl/buildJWTPayload.js";
import { signJwt } from "../../core/modules/auth/utils/impl/signJWT.js";
import { verifyHash } from "../../core/modules/auth/utils/impl/verifyHash.js";
import { TControllerProps } from "../../core/types.js";
import { getUserByNationalCodeRepo } from "../../infrastructure/modules/user/getUserByNationalCode.repo.js";
import { response } from "../../utils/response.js";

export const loginController = async ({ req, res, next }: TControllerProps) => {
  const body = req.body as loginSchema["body"];
  try {
    const result = await loginService({
      data: {
        body,
      },
      buildJWTPayload: buildJWTPayload,
      getUserByNationalCodeRepo: getUserByNationalCodeRepo,
      signJwt: signJwt,
      verifyHash: verifyHash,
    });

    return response(res, result);
  } catch (err) {
    return next(err);
  }
};
