import { loginService } from "../../../application/modules/auth/web/login.service.js";
import { refreshTokenService } from "../../../application/modules/auth/web/refreshToken.service.js";
import { signupService } from "../../../application/modules/auth/web/signup.service.js";
import { verifyEmailService } from "../../../application/modules/auth/web/verifyEmail.service.js";
import { loginSchema } from "../../../core/modules/auth/schema/web/login.schema.js";
import { refreshTokenSchema } from "../../../core/modules/auth/schema/web/refreshToken.schema.js";
import { signupSchema } from "../../../core/modules/auth/schema/web/signup.schema.js";
import { verifySchema } from "../../../core/modules/auth/schema/web/verify.schema.js";
import { buildJWTPayload } from "../../../core/modules/auth/utils/impl/buildJWTPayload.js";
import { generateOTP } from "../../../core/modules/auth/utils/impl/generateOTP.js";
import { hash } from "../../../core/modules/auth/utils/impl/hash.js";
import { signJwt } from "../../../core/modules/auth/utils/impl/signJWT.js";
import { verifyHash } from "../../../core/modules/auth/utils/impl/verifyHash.js";
import { verifyJwt } from "../../../core/modules/auth/utils/impl/verifyJWT.js";
import { TControllerProps } from "../../../core/types.js";
import { createSignupPendingRepo } from "../../../infrastructure/modules/auth/createSignupPending.repo.js";
import { deleteSignupPendingRepo } from "../../../infrastructure/modules/auth/deleteSignupPending.repo.js";
import { updateSignupPendingRepo } from "../../../infrastructure/modules/auth/updateSignupPending.repo.js";
import { getSignupPendingRepo } from "../../../infrastructure/modules/auth/web/getSignupPending.repo.js";
import { getRoleRepo } from "../../../infrastructure/modules/role/cms/getRole.repo.js";
import { getRoleByNameRepo } from "../../../infrastructure/modules/role/web/getRoleByName.repo.js";
import { createStudentProfileRepo } from "../../../infrastructure/modules/studentProfile/createStudentProfile.repo.js";
import { createTeacherProfileRepo } from "../../../infrastructure/modules/teacherProfile/createTeacherProfile.repo.js";
import { createUserRepo } from "../../../infrastructure/modules/user/createUser.repo.js";
import { getUserByEmailRepo } from "../../../infrastructure/modules/user/web/getUserByEmail.repo.js";
import { getUserRoleAndPermissionsByEmailRepo } from "../../../infrastructure/modules/user/web/getUserRoleAndPermissionsByPhoneNumber.repo.js";
import { userExistsRepo } from "../../../infrastructure/modules/user/web/userExists.repo.js";
import { createWalletRepo } from "../../../infrastructure/modules/wallet/createWallet.repo.js";
import { unitOfWorkRepo } from "../../../infrastructure/unitOfWork.repo.js";
import { response } from "../../../utils/response.js";

export async function loginController({ req, res, next }: TControllerProps) {
  try {
    const body = req.body as loginSchema["body"];

    const result = await loginService({
      data: {
        email: body.email,
        password: body.password,
      },
      buildJWTPayload,
      signJwt,
      verifyHash,
      getUserByEmailRepo,
      getUserRoleAndPermissionsByEmailRepo,
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

export async function signupController({ req, res, next }: TControllerProps) {
  try {
    const body = req.body as signupSchema["body"];

    const result = await signupService({
      data: {
        email: body.email,
        firstName: body.firstName,
        lastName: body.lastName,
        password: body.password,
        role: body.role,
      },
      createSignupPendingRepo,
      generateOTP,
      getRoleByNameRepo,
      getSignupPendingRepo,
      hash,
      updateSignupPendingRepo,
      userExistsRepo,
    });

    return response(res, result);
  } catch (err) {
    return next(err);
  }
}

export async function verifyEmailController({
  req,
  res,
  next,
}: TControllerProps) {
  try {
    const body = req.body as verifySchema["body"];

    const result = await verifyEmailService({
      data: {
        email: body.email,
        otp: String(body.otp),
      },
      buildJWTPayload: buildJWTPayload,
      createStudentProfileRepo: createStudentProfileRepo,
      createTeacherProfileRepo: createTeacherProfileRepo,
      createUserRepo: createUserRepo,
      createWalletRepo: createWalletRepo,
      deleteSignupPendingRepo: deleteSignupPendingRepo,
      getRoleRepo: getRoleRepo,
      getSignupPendingRepo: getSignupPendingRepo,
      getUserRoleAndPermissionsByEmailRepo:
        getUserRoleAndPermissionsByEmailRepo,
      signJwt: signJwt,
      verifyHash: verifyHash,
      unitOfWorkRepo: unitOfWorkRepo,
    });

    return response(res, result);
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
      signJwt: signJwt,
      verifyJwt: verifyJwt,
    });

    return response(res, result);
  } catch (err) {
    return next(err);
  }
}
