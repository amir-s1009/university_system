import { TxClient } from "../../../../infrastructure/prisma.js";
import { DepartmentGroupEntity } from "../entity/DepartmentGroup.entity.js";

export type GetDepartmentGroupByIdRepo = (
  {
    id,
  }: {
    id: string;
  },
  tx?: TxClient
) => Promise<DepartmentGroupEntity | null>;
