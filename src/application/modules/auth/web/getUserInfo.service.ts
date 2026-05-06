import { GetUserInfoService } from "../../../../core/modules/auth/service/web/getUserInfo.service.js";
import { AppError } from "../../../error.js";

export const getUserInfoService: GetUserInfoService = async ({
  userId,
  getUserInfoRepo,
}) => {
  const userInfo = await getUserInfoRepo({ id: userId });
  if (!userInfo) throw new AppError("اطلاعات کاربری شما یافت نشد", 404);
  return {
    code: 200,
    data: userInfo,
  };
};
