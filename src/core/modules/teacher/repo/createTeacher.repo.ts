import { TxClient } from "../../../../infrastructure/prisma.js";
import { TeacherEntity } from "../entity/Teacher.entity.js";

export type CreateTeacherRepo = (
  {
    data,
  }: {
    data: Pick<TeacherEntity, "userId">;
  },
  tx?: TxClient
) => Promise<TeacherEntity>;
