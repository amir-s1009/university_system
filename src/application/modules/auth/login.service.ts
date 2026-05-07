import { LoginService } from "../../../core/modules/auth/service/login.service.js";
import { AppError } from "../../error.js";

export const loginService: LoginService = async ({
  data,
  getUserByNationalCodeRepo,
  verifyHash,
  buildJWTPayload,
  signJwt,
}) => {
  const user = await getUserByNationalCodeRepo({
    nationalCode: String(data.body.nationalCode),
  });

  if (!user) throw new AppError("چنین کاربری در سیستم یافت نشد", 404);

  const isPasswordValid = await verifyHash({
    raw: data.body.password,
    hashed: user.password,
  });

  if (!isPasswordValid) throw new AppError("اطلاعات ورود نادرست است", 404);

  const payload = buildJWTPayload({
    id: user.id,
    role: user.role,
  });
  const credentials = await signJwt(payload);

  return {
    code: 200,
    data: credentials,
  };
};
