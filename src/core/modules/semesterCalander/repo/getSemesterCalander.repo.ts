import { TxClient } from "../../../../infrastructure/prisma.js";
import { SemesterCalanderEntity } from "../entity/SemesterCalander.entity.js";

export type GetSemesterCalanderRepo = (
  {
    semesterId,
  }: {
    semesterId: string;
  },
  tx?: TxClient
) => Promise<SemesterCalanderEntity | null>;
