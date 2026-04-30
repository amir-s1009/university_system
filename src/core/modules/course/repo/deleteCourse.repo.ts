import { CourseEntity } from "../entity/Course.entity.js";

export type DeleteCourseRepo = ({
  id,
}: {
  id: string;
}) => Promise<CourseEntity>;
