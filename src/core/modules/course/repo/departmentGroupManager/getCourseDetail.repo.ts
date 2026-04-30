import { CourseDetailDTO } from "../../dto/departmentGroupManager/courseDetail.dto.js";

export type GetCourseDetailRepo = ({
  id,
}: {
  id: string;
}) => Promise<CourseDetailDTO | null>;
