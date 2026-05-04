import { ScoreAppealEntity } from "../entity/ScoreAppeal.entity.js";

export type GetScoreAppealByIdRepo = ({
  id,
}: {
  id: string;
}) => Promise<ScoreAppealEntity | null>;
