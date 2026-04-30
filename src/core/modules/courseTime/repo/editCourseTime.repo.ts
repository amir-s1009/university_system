import { CourseTimeEntity } from "../entity/CourseTime.entity.js";

export type EditCourseTimeRepo = ({
  data,
}: {
  data: CourseTimeEntity;
}) => Promise<CourseTimeEntity>;
