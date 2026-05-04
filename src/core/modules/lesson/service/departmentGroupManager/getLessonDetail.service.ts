import { Response } from "../../../../response.js";
import { GetLessonDetailRepo } from "../../repo/departmentGroupManager/getLessonDetail.repo.js";

export type GetLessonDetailService = ({
  id,
  userId,
  getLessonDetailRepo,
}: {
  id: string;
  userId: string;
  getLessonDetailRepo: GetLessonDetailRepo;
}) => Response;
