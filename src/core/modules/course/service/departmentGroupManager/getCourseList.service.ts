import { Response } from "../../../../response.js";
import { GetDepartmentGroupManagerByUserIdRepo } from "../../../departmentGroupManager/repo/getDepartmentGroupManagerByUserId.repo.js";
import { CourseListItemDTO } from "../../dto/departmentGroupManager/courseListItem.dto.js";
import { GetCourseListRepo } from "../../repo/departmentGroupManager/getCourseList.repo.js";

export type GetCourseListService = ({
  userId,
  getCourseListRepo,
  getDepartmentGroupManagerByUserIdRepo,
}: {
  userId: string;
  getCourseListRepo: GetCourseListRepo;
  getDepartmentGroupManagerByUserIdRepo: GetDepartmentGroupManagerByUserIdRepo;
}) => Response<CourseListItemDTO[]>;
