import { TxClient } from "../../../../infrastructure/prisma.js";
import { StudentEntity } from "../entity/Student.entity.js";

export type GetStudentByIdRepo = (
  {
    id,
  }: {
    id: string;
  },
  tx?: TxClient
) => Promise<StudentEntity | null>;
