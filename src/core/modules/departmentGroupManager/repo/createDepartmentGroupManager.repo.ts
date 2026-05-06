import { TxClient } from "../../../../infrastructure/prisma.js";
import { DepartmentGroupManagerEntity } from "../entity/DepartmentGroupManager.entity.js";

export type CreateDepartmentGroupManagerRepo = (
  {
    data,
  }: {
    data: Pick<DepartmentGroupManagerEntity, "userId" | "departmentGroupId">;
  },
  tx?: TxClient
) => Promise<DepartmentGroupManagerEntity>;
