import { CourseEntity } from "../entity/Course.entity.js";

export type GetCourseByIdRepo = ({
  id,
}: {
  id: string;
}) => Promise<CourseEntity | null>;
