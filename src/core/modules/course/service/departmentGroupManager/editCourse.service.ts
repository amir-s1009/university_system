import { Response } from "../../../../response.js";
import { EditCourseRepo } from "../../repo/editCourse.repo.js";
import { EditCourseSchema } from "../../schema/departmentGroupManager/editCourse.schema.js";

export type EditCourseService = ({
  data,
  userId,
  editCourseRepo,
}: {
  data: EditCourseSchema;
  userId: string;
  editCourseRepo: EditCourseRepo;
}) => Response;
