import { CourseListItemDTO } from "../../dto/departmentGroupManager/courseListItem.dto.js";

export type GetCourseListRepo = () => Promise<CourseListItemDTO[]>;
