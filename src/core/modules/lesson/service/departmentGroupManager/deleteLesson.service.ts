import { Response } from "../../../../response.js";
import { GetDepartmentGroupManagerByUserIdRepo } from "../../../departmentGroupManager/repo/getDepartmentGroupManagerByUserId.repo.js";
import { DeleteLessonRepo } from "../../repo/deleteLesson.repo.js";
import { GetLessonByIdRepo } from "../../repo/getLessonById.repo.js";

export type DeleteLessonService = ({
  id,
  userId,
  deleteLessonRepo,
  getDepartmentGroupManagerByUserIdRepo,
  getLessonByIdRepo,
}: {
  id: string;
  userId: string;
  deleteLessonRepo: DeleteLessonRepo;
  getLessonByIdRepo: GetLessonByIdRepo;
  getDepartmentGroupManagerByUserIdRepo: GetDepartmentGroupManagerByUserIdRepo;
}) => Response;
