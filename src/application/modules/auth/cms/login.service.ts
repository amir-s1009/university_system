import { LoginService } from "../../../../core/modules/auth/service/cms/login.service.js";
import { AppError } from "../../../error.js";

export const loginService: LoginService = async ({
  data,
  getUserRoleAndPermissionsByPhoneNumberRepo,
  getUserByPhoneNumberRepo,
  verifyHash,
  buildJWTPayload,
  signJwt,
}) => {
  if (!data.phoneNumber) throw new AppError("شماره همراه نباید خالی باشد", 400);

  const user = await getUserByPhoneNumberRepo({
    phoneNumber: data.phoneNumber,
  });

  const isPasswordValid = await verifyHash({
    raw: data.password,
    hashed: user.password,
  });

  if (!isPasswordValid) throw new AppError("اطلاعات ورود نادرست است", 404);

  const { role } = await getUserRoleAndPermissionsByPhoneNumberRepo({
    data: {
      phoneNumber: data.phoneNumber,
    },
  });
  const payload = buildJWTPayload({
    id: user.id,
    role: {
      name: role.name,
      permissions: role.permissions,
    },
  });
  const credentials = await signJwt(payload);

  return {
    code: 200,
    data: credentials,
  };
};
