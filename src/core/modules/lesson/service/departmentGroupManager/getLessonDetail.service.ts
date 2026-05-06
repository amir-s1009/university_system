import { Response } from "../../../../response.js";
import { LessonDetailDTO } from "../../dto/departmentGroupManager/lessonDetail.dto.js";
import { GetLessonDetailRepo } from "../../repo/departmentGroupManager/getLessonDetail.repo.js";

export type GetLessonDetailService = ({
  id,
  getLessonDetailRepo,
}: {
  id: string;
  getLessonDetailRepo: GetLessonDetailRepo;
}) => Response<LessonDetailDTO>;
