import { TxClient } from "../../../../infrastructure/prisma.js";

export type DisconnectDepartmentGroupFromTeacherRepo = (
  {
    departmentGroupId,
    teacherId,
  }: {
    departmentGroupId: string;
    teacherId: string;
  },
  tx?: TxClient
) => Promise<void>;
