import { Response } from "../../../../response.js";
import { EditLessonRepo } from "../../repo/editLesson.repo.js";
import { EditLessonSchema } from "../../schema/departmentGroupManager/editLesson.schema.js";

export type EditLessonService = ({
  data,
  userId,
  editLessonRepo,
}: {
  data: EditLessonSchema;
  userId: string;
  editLessonRepo: EditLessonRepo;
}) => Response;
