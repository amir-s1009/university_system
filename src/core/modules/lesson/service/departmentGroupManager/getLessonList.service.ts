import { Response } from "../../../../response.js";
import { GetDepartmentGroupManagerByUserIdRepo } from "../../../departmentGroupManager/repo/getDepartmentGroupManagerByUserId.repo.js";
import { LessonListItemDTO } from "../../dto/departmentGroupManager/lessonListItem.dto.js";
import { GetLessonListRepo } from "../../repo/departmentGroupManager/getLessonList.repo.js";

export type GetLessonListService = ({
  userId,
  getLessonListRepo,
  getDepartmentGroupManagerByUserIdRepo,
}: {
  userId: string;
  getLessonListRepo: GetLessonListRepo;
  getDepartmentGroupManagerByUserIdRepo: GetDepartmentGroupManagerByUserIdRepo;
}) => Response<LessonListItemDTO[]>;
