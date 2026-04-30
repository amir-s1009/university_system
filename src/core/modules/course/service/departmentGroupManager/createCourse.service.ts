import { Response } from "../../../../response.js";
import { CreateCourseRepo } from "../../repo/createCourse.repo.js";
import { CreateCourseSchema } from "../../schema/departmentGroupManager/createCourse.schema.js";

export type CreateCourseService = ({
  data,
  userId,
  createCourseRepo,
}: {
  data: CreateCourseSchema;
  userId: string;
  createCourseRepo: CreateCourseRepo;
}) => Response;
