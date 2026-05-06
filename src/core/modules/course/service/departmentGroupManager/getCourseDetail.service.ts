import { Response } from "../../../../response.js";
import { CourseDetailDTO } from "../../dto/departmentGroupManager/courseDetail.dto.js";
import { GetCourseDetailRepo } from "../../repo/departmentGroupManager/getCourseDetail.repo.js";

export type GetCourseDetailService = ({
  id,
  getCourseDetailRepo,
}: {
  id: string;
  getCourseDetailRepo: GetCourseDetailRepo;
}) => Response<CourseDetailDTO>;
