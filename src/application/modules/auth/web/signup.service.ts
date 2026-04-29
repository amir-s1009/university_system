import { ROLE } from "@prisma/client";
import { SALT_ROUND } from "../../../../core/modules/auth/constant.js";
import { SignupService } from "../../../../core/modules/auth/service/web/signup.service.js";
import { sendEmail, verifyEmailTemplate } from "../../../../utils/email.js";
import { AppError } from "../../../error.js";

export const signupService: SignupService = async ({
  data,
  userExistsRepo,
  getSignupPendingRepo,
  updateSignupPendingRepo,
  getRoleByNameRepo,
  createSignupPendingRepo,
  generateOTP,
  hash,
}) => {
  if (!data.email) throw new AppError("ایمیل نمیتواند خالی باشد", 400);
  const userExists = await userExistsRepo({
    email: data.email,
  });

  if (userExists)
    throw new AppError("این ایمیل قبلا در سیستم ثبت شده است", 403);

  const pending = await getSignupPendingRepo({ email: data.email });

  const { otp, exp } = generateOTP();

  const hashedOTP = await hash({
    raw: String(otp),
    salt: SALT_ROUND,
  });

  if (pending) {
    await updateSignupPendingRepo({
      data: {
        email: data.email,
        exp,
        otp: hashedOTP,
      },
    });
    try {
      await sendEmail(data.email, "تایید ایمیل", verifyEmailTemplate(otp));
    } catch {
      throw new AppError(
        "مشکلی در ارسال ایمیل بوجود آمده است، لطفا بعدا تلاش کنید",
        400
      );
    }
    return {
      code: 200,
      message: "کد تایید به ایمیل شما ارسال گردید",
    };
  }

  const role = await getRoleByNameRepo({ name: data.role });

  if (!role || (role.name !== ROLE.STUDENT && role.name !== ROLE.TEACHER)) {
    throw new AppError(
      "فقط دانش آموزان و معلمان امکان ثبت نام در سیستم را دارند",
      403
    );
  }

  const hashedPassword = await hash({
    raw: data.password,
    salt: SALT_ROUND,
  });

  await createSignupPendingRepo({
    data: {
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
      password: hashedPassword,
      roleId: role.id,
      otp: hashedOTP,
      exp,
    },
  });

  try {
    await sendEmail(data.email, "تایید ایمیل", verifyEmailTemplate(otp));
  } catch {
    throw new AppError(
      "مشکلی در ارسال ایمیل بوجود آمده است، لطفا بعدا تلاش کنید",
      400
    );
  }

  return {
    code: 200,
    message: "کد تایید به ایمیل شما ارسال شد",
  };
};
