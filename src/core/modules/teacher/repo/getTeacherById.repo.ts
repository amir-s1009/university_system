import { TxClient } from "../../../../infrastructure/prisma.js";
import { TeacherEntity } from "../entity/Teacher.entity.js";

export type GetTeacherByIdRepo = (
  {
    id,
  }: {
    id: string;
  },
  tx?: TxClient
) => Promise<TeacherEntity | null>;
