import { TxClient } from "../../../../infrastructure/prisma.js";
import { TeacherEntity } from "../entity/Teacher.entity.js";

export type GetTeacherByUserIdRepo = (
  {
    userId,
  }: {
    userId: string;
  },
  tx?: TxClient
) => Promise<TeacherEntity | null>;
