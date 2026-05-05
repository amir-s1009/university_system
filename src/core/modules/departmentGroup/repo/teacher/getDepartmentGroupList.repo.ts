import { TxClient } from "../../../../../infrastructure/prisma.js";
import { DepartmentGroupListItemDTO } from "../../dto/teacher/departmentGroupListItem.dto.js";

export type GetDepartmentGroupListRepo = (
  {
    teacherId,
  }: {
    teacherId: string;
  },
  tx?: TxClient
) => Promise<DepartmentGroupListItemDTO[]>;
