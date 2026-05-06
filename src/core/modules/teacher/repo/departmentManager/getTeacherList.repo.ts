import { TxClient } from "../../../../../infrastructure/prisma.js";
import { TeacherListItemDTO } from "../../dto/departmentManager/teacherListItem.dto.js";

export type GetTeacherListRepo = (
  {
    departmentId,
  }: {
    departmentId: string;
  },
  tx?: TxClient
) => Promise<TeacherListItemDTO[]>;
