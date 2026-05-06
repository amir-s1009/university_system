import { Response } from "../../../../response.js";
import { RefreshTokenEntity } from "../../entity/response/cms/refreshToken.entity.js";
import { SignJwt } from "../../utils/interface/signJWT.js";
import { VerifyJwt } from "../../utils/interface/verifyJWT.js";

export type RefreshTokenService = ({
  refreshToken,
  signJwt,
  verifyJwt,
}: {
  refreshToken: string;
  verifyJwt: VerifyJwt;
  signJwt: SignJwt;
}) => Response<RefreshTokenEntity>;
