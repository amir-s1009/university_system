import { TxClient } from "../../../../infrastructure/prisma.js";
import { StudentEntity } from "../entity/Student.entity.js";

export type DeleteStudentRepo = (
  {
    id,
  }: {
    id: string;
  },
  tx?: TxClient
) => Promise<StudentEntity>;
