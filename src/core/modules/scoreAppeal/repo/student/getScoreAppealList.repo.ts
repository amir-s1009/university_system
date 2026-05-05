import { TxClient } from "../../../../../infrastructure/prisma.js";
import { ScoreAppealListItemDTO } from "../../dto/student/scoreAppealListItem.dto.js";

export type GetScoreAppealListRepo = (
  {
    semesterId,
    userId,
  }: {
    semesterId?: string;
    userId: string;
  },
  tx?: TxClient
) => Promise<ScoreAppealListItemDTO[]>;
