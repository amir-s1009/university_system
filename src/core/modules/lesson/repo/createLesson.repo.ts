import { LessonEntity } from "../entity/Lesson.entity.js";

export type CreateLessonRepo = ({
  data,
}: {
  data: Pick<
    LessonEntity,
    "title" | "coefficient" | "lessonType" | "departmentGroupId"
  >;
}) => Promise<LessonEntity>;
