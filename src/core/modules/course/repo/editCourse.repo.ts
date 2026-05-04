import { CourseEntity } from "../entity/Course.entity.js";

export type EditCourseRepo = ({
  data,
}: {
  data: Partial<CourseEntity>;
}) => Promise<CourseEntity>;
