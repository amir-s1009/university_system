import { Response } from "../../../../response.js";
import { UserEntity } from "../../../user/entity/User.entity.js";
import { GetUserByEmailRepo } from "../../../user/repo/web/getUserByEmail.repo.js";
import { GetUserRoleAndPermissionsByEmailRepo } from "../../../user/repo/web/getUserRoleAndPermissionsByEmail.repo.js";
import { LoginEntity } from "../../entity/response/web/login.entity.js";
import { BuildJWTPayload } from "../../utils/interface/buildJWTPayload.js";
import { SignJwt } from "../../utils/interface/signJWT.js";
import { VerifyHash } from "../../utils/interface/verifyHash.js";

export type LoginService = ({
  data,
  getUserByEmailRepo,
  getUserRoleAndPermissionsByEmailRepo,
  verifyHash,
  buildJWTPayload,
  signJwt,
}: {
  data: Pick<UserEntity, "email" | "password">;
  getUserByEmailRepo: GetUserByEmailRepo;
  getUserRoleAndPermissionsByEmailRepo: GetUserRoleAndPermissionsByEmailRepo;
  verifyHash: VerifyHash;
  buildJWTPayload: BuildJWTPayload;
  signJwt: SignJwt;
}) => Response<LoginEntity>;
