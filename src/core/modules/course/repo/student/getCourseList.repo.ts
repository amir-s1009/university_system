import { CourseListItemDTO } from "../../dto/student/courseListItem.dto.js";
import { CourseEntity } from "../../entity/Course.entity.js";

export type GetCourseListRepo = ({
  data,
}: {
  data: Pick<CourseEntity, "semesterId">;
}) => Promise<CourseListItemDTO[]>;
