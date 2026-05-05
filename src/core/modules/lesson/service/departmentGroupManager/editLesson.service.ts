import { Response } from "../../../../response.js";
import { GetDepartmentGroupManagerByUserIdRepo } from "../../../departmentGroupManager/repo/getDepartmentGroupManagerByUserId.repo.js";
import { EditLessonRepo } from "../../repo/editLesson.repo.js";
import { GetLessonByIdRepo } from "../../repo/getLessonById.repo.js";
import { EditLessonSchema } from "../../schema/departmentGroupManager/editLesson.schema.js";

export type EditLessonService = ({
  data,
  userId,
  editLessonRepo,
  getLessonByIdRepo,
  getDepartmentGroupManagerByUserIdRepo,
}: {
  data: EditLessonSchema;
  userId: string;
  editLessonRepo: EditLessonRepo;
  getLessonByIdRepo: GetLessonByIdRepo;
  getDepartmentGroupManagerByUserIdRepo: GetDepartmentGroupManagerByUserIdRepo;
}) => Response;
