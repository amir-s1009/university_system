import { LoginService } from "../../../../core/modules/auth/service/web/login.service.js";
import { AppError } from "../../../error.js";

export const loginService: LoginService = async ({
  data,
  getUserByEmailRepo,
  getUserRoleAndPermissionsByEmailRepo,
  verifyHash,
  buildJWTPayload,
  signJwt,
}) => {
  if (!data.email) throw new AppError("ایمیل نمیتواند خالی باشد", 400);

  const user = await getUserByEmailRepo({
    email: data.email,
  });

  const isPasswordValid = await verifyHash({
    raw: data.password,
    hashed: user.password,
  });

  if (!isPasswordValid) throw new AppError("رمز عبور شما اشتباه است", 404);

  const { role } = await getUserRoleAndPermissionsByEmailRepo({
    data: { email: data.email },
  });

  const payload = buildJWTPayload({
    id: user.id,
    role: {
      name: role.name,
      permissions: role.permissions,
    },
  });
  const credentails = await signJwt(payload);

  return {
    code: 200,
    data: credentails,
  };
};
