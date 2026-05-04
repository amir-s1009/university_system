import { Response } from "../../../../response.js";
import { DeleteLessonRepo } from "../../repo/deleteLesson.repo.js";

export type DeleteLessonService = ({
  id,
  userId,
  deleteLessonRepo,
}: {
  id: string;
  userId: string;
  deleteLessonRepo: DeleteLessonRepo;
}) => Response;
