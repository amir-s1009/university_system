import { Response } from "../../../../response.js";
import { LessonListItemDTO } from "../../dto/departmentGroupManager/lessonListItem.dto.js";
import { GetLessonListRepo } from "../../repo/departmentGroupManager/getLessonList.repo.js";

export type GetLessonListService = ({
  userId,
  getLessonListRepo,
}: {
  userId: string;
  getLessonListRepo: GetLessonListRepo;
}) => Response<LessonListItemDTO[]>;
