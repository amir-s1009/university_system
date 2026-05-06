import { TxClient } from "../../../../infrastructure/prisma.js";
import { TeacherEntity } from "../entity/Teacher.entity.js";

export type EditTeacherRepo = (
  {
    data,
  }: {
    data: Partial<TeacherEntity>;
  },
  tx?: TxClient
) => Promise<TeacherEntity>;
