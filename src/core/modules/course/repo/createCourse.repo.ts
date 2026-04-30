import { CourseEntity } from "../entity/Course.entity.js";

export type CreateCourseRepo = ({
  data,
}: {
  data: Pick<
    CourseEntity,
    | "capacity"
    | "examAt"
    | "canceled"
    | "lessonId"
    | "number"
    | "semesterId"
    | "teacherId"
  >;
}) => Promise<CourseEntity>;
