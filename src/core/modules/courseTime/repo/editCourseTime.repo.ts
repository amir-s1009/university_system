import { CourseTimeEntity } from "../entity/CourseTime.entity.js";

export type EditCourseTimeRepo = ({
  data,
}: {
  data: Partial<CourseTimeEntity>;
}) => Promise<CourseTimeEntity>;
