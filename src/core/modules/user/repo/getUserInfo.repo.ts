import { TxClient } from "../../../../infrastructure/prisma.js";
import { UserInfoDTO } from "../../auth/dto/userInfo.dto.js";

export type GetUserInfoRepo = (
  {
    id,
  }: {
    id: string;
  },
  tx?: TxClient
) => Promise<UserInfoDTO | null>;
