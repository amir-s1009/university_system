import { TxClient } from "../../../../../infrastructure/prisma.js";
import { StudentListItemDTO } from "../../dto/departmentGroupManager/studentListItem.dto.js";

export type GetStudentListRepo = (
  {
    departmentGroupId,
  }: {
    departmentGroupId: string;
  },
  tx?: TxClient
) => Promise<StudentListItemDTO[]>;
