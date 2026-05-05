import { TxClient } from "../../../../infrastructure/prisma.js";
import { DepartmentManagerEntity } from "../entity/DepartmentManager.entity.js";

export type GetDepartmentManagerByUserIdRepo = (
  {
    userId,
  }: {
    userId: string;
  },
  tx?: TxClient
) => Promise<DepartmentManagerEntity | null>;
