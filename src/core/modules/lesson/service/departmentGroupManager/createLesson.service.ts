import { Response } from "../../../../response.js";
import { GetDepartmentGroupManagerByUserIdRepo } from "../../../departmentGroupManager/repo/getDepartmentGroupManagerByUserId.repo.js";
import { CreateLessonRepo } from "../../repo/createLesson.repo.js";
import { CreateLessonSchema } from "../../schema/departmentGroupManager/createLesson.schema.js";

export type CreateLessonService = ({
  data,
  userId,
  createLessonRepo,
  getDepartmentGroupManagerByUserIdRepo,
}: {
  data: CreateLessonSchema;
  userId: string;
  createLessonRepo: CreateLessonRepo;
  getDepartmentGroupManagerByUserIdRepo: GetDepartmentGroupManagerByUserIdRepo;
}) => Response;
