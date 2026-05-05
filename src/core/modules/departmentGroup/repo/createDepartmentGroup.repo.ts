import { TxClient } from "../../../../infrastructure/prisma.js";
import { DepartmentGroupEntity } from "../entity/DepartmentGroup.entity.js";

export type CreateDepartmentGroupRepo = (
  {
    data,
  }: {
    data: Pick<DepartmentGroupEntity, "departmentId" | "title">;
  },
  tx?: TxClient
) => Promise<DepartmentGroupEntity>;
