import { TxClient } from "../../../../infrastructure/prisma.js";
import { DepartmentGroupEntity } from "../entity/DepartmentGroup.entity.js";

export type EditDepartmentGroupRepo = (
  {
    data,
  }: {
    data: Partial<DepartmentGroupEntity>;
  },
  tx?: TxClient
) => Promise<DepartmentGroupEntity>;
