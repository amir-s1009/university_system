import { Response } from "../../../../response.js";
import { CreateLessonRepo } from "../../repo/createLesson.repo.js";
import { CreateLessonSchema } from "../../schema/departmentGroupManager/createLesson.schema.js";

export type CreateLessonService = ({
  data,
  userId,
  createLessonRepo,
}: {
  data: CreateLessonSchema;
  userId: string;
  createLessonRepo: CreateLessonRepo;
}) => Response;
