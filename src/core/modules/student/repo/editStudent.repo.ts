import { TxClient } from "../../../../infrastructure/prisma.js";
import { StudentEntity } from "../entity/Student.entity.js";

export type EditStudentRepo = (
  {
    data,
  }: {
    data: Partial<StudentEntity>;
  },
  tx?: TxClient
) => Promise<StudentEntity>;
