import { TxClient } from "../../../../../infrastructure/prisma.js";
import { DepartmentGroupListItemDTO } from "../../dto/departmentManager/departmentGroupListItem.dto.js";

export type GetDepartmentGroupListRepo = (
  {
    departmentId,
  }: {
    departmentId: string;
  },
  tx?: TxClient
) => Promise<DepartmentGroupListItemDTO[]>;
