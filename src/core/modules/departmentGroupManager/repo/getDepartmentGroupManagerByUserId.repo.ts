import { TxClient } from "../../../../infrastructure/prisma.js";
import { DepartmentGroupManagerEntity } from "../entity/DepartmentGroupManager.entity.js";

export type GetDepartmentGroupManagerByUserIdRepo = (
  {
    userId,
  }: {
    userId: string;
  },
  tx?: TxClient
) => Promise<DepartmentGroupManagerEntity | null>;
