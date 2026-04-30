import { Response } from "../../../../response.js";
import { DeleteCourseRepo } from "../../repo/deleteCourse.repo.js";

export type DeleteCourseService = ({
  id,
  deleteCourseRepo,
}: {
  id: string;
  deleteCourseRepo: DeleteCourseRepo;
}) => Response;
