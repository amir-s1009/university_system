import { Response } from "../../../../response.js";
import { ScoreAppealListItemDTO } from "../../dto/student/scoreAppealListItem.dto.js";
import { GetScoreAppealListRepo } from "../../repo/student/getScoreAppealList.repo.js";
import { GetScoreAppealListSchema } from "../../schema/student/getScoreAppealList.schema.js";

export type GetScoreAppealListService = ({
  data,
  userId,
  getScoreAppealListRepo,
}: {
  data: GetScoreAppealListSchema;
  userId: string;
  getScoreAppealListRepo: GetScoreAppealListRepo;
}) => Response<ScoreAppealListItemDTO[]>;
