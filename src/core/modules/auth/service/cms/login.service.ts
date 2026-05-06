import { Response } from "../../../../response.js";
import { UserEntity } from "../../../user/entity/User.entity.js";
import { GetUserRoleAndPermissionsByPhoneNumberRepo } from "../../../user/repo/cms/getUserRoleAndPermissionsByPhoneNumber.repo.js";
import { GetUserByPhoneNumberRepo } from "../../../user/repo/cms/getUserByPhoneNumber.repo.js";
import { LoginEntity } from "../../entity/response/cms/login.entity.js";
import { VerifyHash } from "../../utils/interface/verifyHash.js";
import { BuildJWTPayload } from "../../utils/interface/buildJWTPayload.js";
import { SignJwt } from "../../utils/interface/signJWT.js";

export type LoginService = ({
  data,
  getUserRoleAndPermissionsByPhoneNumberRepo,
  getUserByPhoneNumberRepo,
  verifyHash,
  buildJWTPayload,
  signJwt,
}: {
  data: Pick<UserEntity, "phoneNumber" | "password">;
  getUserRoleAndPermissionsByPhoneNumberRepo: GetUserRoleAndPermissionsByPhoneNumberRepo;
  getUserByPhoneNumberRepo: GetUserByPhoneNumberRepo;
  verifyHash: VerifyHash;
  buildJWTPayload: BuildJWTPayload;
  signJwt: SignJwt;
}) => Response<LoginEntity>;
