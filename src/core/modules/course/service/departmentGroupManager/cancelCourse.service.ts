import { Response } from "../../../../response.js";
import { EditCourseRepo } from "../../repo/editCourse.repo.js";

export type CancelCourseService = ({
  id,
  editCourseRepo,
}: {
  id: string;
  editCourseRepo: EditCourseRepo;
}) => Response;
