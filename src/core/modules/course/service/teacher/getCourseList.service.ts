import { Response } from "../../../../response.js";
import { CourseListItemDTO } from "../../dto/teacher/courseListItem.dto.js";
import { GetCourseListRepo } from "../../repo/teacher/getCourseList.repo.js";
import { GetCourseListSchema } from "../../schema/teacher/getCourseList.schema.js";

export type GetCourseListService = ({
  userId,
  data,
  getCourseListRepo,
}: {
  userId: string;
  data: GetCourseListSchema;
  getCourseListRepo: GetCourseListRepo;
}) => Response<CourseListItemDTO[]>;
