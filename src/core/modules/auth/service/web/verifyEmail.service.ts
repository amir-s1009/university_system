import { Response } from "../../../../response.js";
import { UnitOfWorkRepo } from "../../../../../application/unitOfWork.repo.js";
import { GetRoleRepo } from "../../../role/repo/cms/getRole.repo.js";
import { CreateStudentProfileRepo } from "../../../studentProfile/repo/createStudentProfile.repo.js";
import { CreateTeacherProfileRepo } from "../../../teacherProfile/repo/createTeacherProfile.repo.js";
import { CreateUserRepo } from "../../../user/repo/createUser.repo.js";
import { GetUserRoleAndPermissionsByEmailRepo } from "../../../user/repo/web/getUserRoleAndPermissionsByEmail.repo.js";
import { CreateWalletRepo } from "../../../wallet/repo/createWallet.repo.js";
import { SignupEntity } from "../../entity/response/web/signup.entity.js";
import { DeleteSignupPendingRepo } from "../../repo/deleteSignupPending.repo.js";
import { GetSignupPendingRepo } from "../../repo/web/getSignupPending.repo.js";
import { BuildJWTPayload } from "../../utils/interface/buildJWTPayload.js";
import { SignJwt } from "../../utils/interface/signJWT.js";
import { VerifyHash } from "../../utils/interface/verifyHash.js";

export type VerifyEmailService = ({
  data,
  getRoleRepo,
  getSignupPendingRepo,
  deleteSignupPendingRepo,
  createUserRepo,
  createWalletRepo,
  createStudentProfileRepo,
  createTeacherProfileRepo,
  getUserRoleAndPermissionsByEmailRepo,
  unitOfWorkRepo,
  buildJWTPayload,
  signJwt,
  verifyHash,
}: {
  data: { otp: string; email: string };
  getSignupPendingRepo: GetSignupPendingRepo;
  deleteSignupPendingRepo: DeleteSignupPendingRepo;
  getRoleRepo: GetRoleRepo;
  createUserRepo: CreateUserRepo;
  createStudentProfileRepo: CreateStudentProfileRepo;
  createTeacherProfileRepo: CreateTeacherProfileRepo;
  createWalletRepo: CreateWalletRepo;
  getUserRoleAndPermissionsByEmailRepo: GetUserRoleAndPermissionsByEmailRepo;
  unitOfWorkRepo: UnitOfWorkRepo;
  verifyHash: VerifyHash;
  signJwt: SignJwt;
  buildJWTPayload: BuildJWTPayload;
}) => Response<SignupEntity>;
