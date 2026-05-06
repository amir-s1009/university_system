import { TxClient } from "../../../../infrastructure/prisma.js";
import { DepartmentGroupManagerEntity } from "../entity/DepartmentGroupManager.entity.js";

export type GetDepartmentGroupManagerByIdRepo = (
  {
    id,
  }: {
    id: string;
  },
  tx?: TxClient
) => Promise<DepartmentGroupManagerEntity | null>;
