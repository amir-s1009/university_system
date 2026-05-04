import { Response } from "../../../../response.js";
import { CourseListItemDTO } from "../../dto/student/courseListItem.dto.js";
import { GetCourseListRepo } from "../../repo/student/getCourseList.repo.js";
import { GetCourseListSchema } from "../../schema/student/getCourseList.schema.js";

export type GetCourseListService = ({
  data,
  userId,
  getCourseListRepo,
}: {
  data: GetCourseListSchema;
  userId: string;
  getCourseListRepo: GetCourseListRepo;
}) => Response<CourseListItemDTO[]>;
