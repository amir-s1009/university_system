import { TxClient } from "../../../../../infrastructure/prisma.js";
import { StudentDetailDTO } from "../../dto/departmentGroupManager/studentDetail.dto.js";

export type GetStudentDetailRepo = (
  {
    id,
  }: {
    id: string;
  },
  tx?: TxClient
) => Promise<StudentDetailDTO | null>;
