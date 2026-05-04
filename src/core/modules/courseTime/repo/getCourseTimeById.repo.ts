import { CourseTimeEntity } from "../entity/CourseTime.entity.js";

export type GetCourseTimeByIdRepo = ({
  id,
}: {
  id: string;
}) => Promise<CourseTimeEntity | null>;
