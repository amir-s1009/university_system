import { CourseListItemDTO } from "../../dto/teacher/courseListItem.dto.js";

export type GetCourseListRepo = ({
  teacherId,
  departmentGroupId,
}: {
  teacherId: string;
  departmentGroupId?: string;
}) => Promise<CourseListItemDTO[]>;
