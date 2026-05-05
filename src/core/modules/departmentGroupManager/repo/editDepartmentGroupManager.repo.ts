import { TxClient } from "../../../../infrastructure/prisma.js";
import { DepartmentGroupManagerEntity } from "../entity/DepartmentGroupManager.entity.js";

export type EditDepartmentGroupManagerRepo = (
  {
    data,
  }: {
    data: Partial<DepartmentGroupManagerEntity>;
  },
  tx?: TxClient
) => Promise<DepartmentGroupManagerEntity>;
