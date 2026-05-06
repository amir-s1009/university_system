import { TxClient } from "../../../../infrastructure/prisma.js";
import { DepartmentGroupEntity } from "../../departmentGroup/entity/DepartmentGroup.entity.js";

export type GetTeacherDepartmentGroupListRepo = (
  {
    teacherId,
  }: {
    teacherId: string;
  },
  tx?: TxClient
) => Promise<DepartmentGroupEntity[]>;
