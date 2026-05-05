import { TxClient } from "../../../../infrastructure/prisma.js";
import { StudentEntity } from "../entity/Student.entity.js";

export type CreateStudentRepo = (
  {
    data,
  }: {
    data: Pick<
      StudentEntity,
      "departmentGroupId" | "enteranceSemesterId" | "studyMode" | "userId"
    >;
  },
  tx?: TxClient
) => Promise<StudentEntity>;
