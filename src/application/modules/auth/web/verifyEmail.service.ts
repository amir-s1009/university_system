import { ROLE } from "@prisma/client";
import { VerifyEmailService } from "../../../../core/modules/auth/service/web/verifyEmail.service.js";
import { AppError } from "../../../error.js";

export const verifyEmailService: VerifyEmailService = async ({
  data,
  getSignupPendingRepo,
  deleteSignupPendingRepo,
  getRoleRepo,
  createUserRepo,
  createWalletRepo,
  createStudentProfileRepo,
  createTeacherProfileRepo,
  getUserRoleAndPermissionsByEmailRepo,
  unitOfWorkRepo,
  buildJWTPayload,
  signJwt,
  verifyHash,
}) => {
  const pending = await getSignupPendingRepo({ email: data.email });

  if (!pending) throw new AppError("اطلاعات ثبت نامی شما یافت نشد.", 404);

  if (pending.exp <= new Date())
    throw new AppError("کد تایید منقضی شده است.", 400);

  const isValid = await verifyHash({
    raw: data.otp,
    hashed: pending.otp,
  });

  if (!isValid) throw new AppError("کد تایید اشتباه است.", 400);

  const role = await getRoleRepo({ id: pending.roleId });

  if (!role) throw new AppError("نقش کاربری یافت نشد", 404);

  const userCreated = await unitOfWorkRepo(async (tx) => {
    const userCreated = await createUserRepo(
      {
        data: {
          email: pending.email,
          firstName: pending.firstName,
          lastName: pending.lastName,
          password: pending.password,
          isActive: true,
          roleId: pending.roleId,
        },
      },
      tx
    );
    if (role.name === ROLE.STUDENT) {
      await createStudentProfileRepo(
        {
          data: {
            userId: userCreated.id,
          },
        },
        tx
      );
    } else if (role.name === ROLE.TEACHER) {
      await createTeacherProfileRepo(
        {
          data: {
            userId: userCreated.id,
            grade: [],
          },
        },
        tx
      );
    }
    await createWalletRepo(
      {
        data: {
          userId: userCreated.id,
          balance: 0,
        },
      },
      tx
    );
    await deleteSignupPendingRepo(
      {
        email: data.email,
      },
      tx
    );

    return userCreated;
  });

  const {
    role: { permissions },
  } = await getUserRoleAndPermissionsByEmailRepo({
    data: {
      email: data.email,
    },
  });

  const payload = buildJWTPayload({
    id: userCreated.id,
    role: {
      name: role.name as ROLE,
      permissions: permissions,
    },
  });
  const credentails = await signJwt(payload);

  return {
    code: 200,
    message: "ثبت نام شما تکمیل شد",
    data: credentails,
  };
};
