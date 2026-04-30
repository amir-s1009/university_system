import { CourseEntity } from "../entity/Course.entity.js";

export type EditCourseRepo = ({
  data,
}: {
  data: CourseEntity;
}) => Promise<CourseEntity>;
