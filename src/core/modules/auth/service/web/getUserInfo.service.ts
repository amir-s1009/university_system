import { Response } from "../../../../response.js";
import { GetUserInfoRepo } from "../../../user/repo/web/getUserInfo.repo.js";
import { UserInfoEntity } from "../../entity/response/web/userInfo.entity.js";

export type GetUserInfoService = ({
  userId,
  getUserInfoRepo,
}: {
  userId: string;
  getUserInfoRepo: GetUserInfoRepo;
}) => Response<UserInfoEntity>;
