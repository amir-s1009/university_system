import { Response } from "../../../response.js";
import { VerifyHash } from "../utils/interface/verifyHash.js";
import { BuildJWTPayload } from "../utils/interface/buildJWTPayload.js";
import { SignJwt } from "../utils/interface/signJWT.js";
import { loginSchema } from "../schema/login.schema.js";
import { LoginDTO } from "../dto/login.dto.js";
import { GetUserByNationalCodeRepo } from "../../user/repo/getUserByNationalCode.repo.js";

export type LoginService = ({
  data,
  getUserByNationalCodeRepo,
  verifyHash,
  buildJWTPayload,
  signJwt,
}: {
  data: loginSchema;
  getUserByNationalCodeRepo: GetUserByNationalCodeRepo;
  verifyHash: VerifyHash;
  buildJWTPayload: BuildJWTPayload;
  signJwt: SignJwt;
}) => Response<LoginDTO>;
