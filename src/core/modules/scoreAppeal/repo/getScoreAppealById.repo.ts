import { TxClient } from "../../../../infrastructure/prisma.js";
import { ScoreAppealEntity } from "../entity/ScoreAppeal.entity.js";

export type GetScoreAppealByIdRepo = (
  {
    id,
  }: {
    id: string;
  },
  tx?: TxClient
) => Promise<ScoreAppealEntity | null>;
