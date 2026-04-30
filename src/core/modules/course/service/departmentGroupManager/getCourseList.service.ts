import { Response } from "../../../../response.js";
import { CourseListItemDTO } from "../../dto/departmentGroupManager/courseListItem.dto.js";
import { GetCourseListRepo } from "../../repo/departmentGroupManager/getCourseList.repo.js";

export type GetCourseListService = ({
  getCourseListRepo,
}: {
  getCourseListRepo: GetCourseListRepo;
}) => Response<CourseListItemDTO[]>;
