import { Response } from "../../../../response.js";
import { GetDepartmentGroupManagerByUserIdRepo } from "../../../departmentGroupManager/repo/getDepartmentGroupManagerByUserId.repo.js";
import { GetGeneralSettingsRepo } from "../../../generalSettings/repo/getGeneralSettings.repo.js";
import { GetLessonByIdRepo } from "../../../lesson/repo/getLessonById.repo.js";
import { CreateCourseRepo } from "../../repo/createCourse.repo.js";
import { CreateCourseSchema } from "../../schema/departmentGroupManager/createCourse.schema.js";

export type CreateCourseService = ({
  data,
  userId,
  createCourseRepo,
  getGeneralSettingsRepo,
  getDepartmentGroupManagerByUserIdRepo,
  getLessonByIdRepo,
}: {
  data: CreateCourseSchema;
  userId: string;
  createCourseRepo: CreateCourseRepo;
  getGeneralSettingsRepo: GetGeneralSettingsRepo;
  getDepartmentGroupManagerByUserIdRepo: GetDepartmentGroupManagerByUserIdRepo;
  getLessonByIdRepo: GetLessonByIdRepo;
}) => Response;
