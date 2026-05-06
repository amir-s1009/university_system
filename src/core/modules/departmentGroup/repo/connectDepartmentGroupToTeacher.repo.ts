import { TxClient } from "../../../../infrastructure/prisma.js";

export type ConnectDepartmentGroupToTeacherRepo = (
  {
    departmentGroupId,
    teacherId,
  }: {
    departmentGroupId: string;
    teacherId: string;
  },
  tx?: TxClient
) => Promise<void>;
