import { Response } from "../../../../response.js";
import { GetUserInfoRepo } from "../../../user/repo/cms/getUserInfo.repo.js";
import { UserInfoEntity } from "../../entity/response/cms/userInfo.entity.js";

export type GetUserInfoService = ({
  userId,
  getUserInfoRepo,
}: {
  userId: string;
  getUserInfoRepo: GetUserInfoRepo;
}) => Response<UserInfoEntity>;
