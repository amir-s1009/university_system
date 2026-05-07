import { Response } from "../../../response.js";
import { GetUserInfoRepo } from "../../user/repo/getUserInfo.repo.js";
import { UserInfoDTO } from "../dto/userInfo.dto.js";

export type GetUserInfoService = ({
  userId,
  getUserInfoRepo,
}: {
  userId: string;
  getUserInfoRepo: GetUserInfoRepo;
}) => Response<UserInfoDTO>;
