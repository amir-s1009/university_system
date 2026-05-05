import { TxClient } from "../../../../../infrastructure/prisma.js";
import { DepartmentGroupDetailDTO } from "../../dto/departmentManager/departmentGroupDetail.dto.js";

export type GetDepartmentGroupDetailRepo = (
  {
    id,
  }: {
    id: string;
  },
  tx?: TxClient
) => Promise<DepartmentGroupDetailDTO | null>;
