import { TxClient } from "../../../../infrastructure/prisma.js";
import { TeacherEntity } from "../entity/Teacher.entity.js";

export type DeleteTeacherRepo = (
  {
    id,
  }: {
    id: string;
  },
  tx?: TxClient
) => Promise<TeacherEntity>;
