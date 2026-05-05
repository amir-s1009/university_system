import { TxClient } from "../../../../infrastructure/prisma.js";
import { StudentEntity } from "../entity/Student.entity.js";

export type GetStudentByUserIdRepo = (
  {
    userId,
  }: {
    userId: string;
  },
  tx?: TxClient
) => Promise<StudentEntity | null>;
