import { ScoreAppealListItemDTO } from "../../dto/student/scoreAppealListItem.dto.js";

export type GetScoreAppealListRepo = ({
  semesterId,
  userId,
}: {
  semesterId?: string;
  userId: string;
}) => Promise<ScoreAppealListItemDTO[]>;
