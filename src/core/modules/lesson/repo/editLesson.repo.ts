import { LessonEntity } from "../entity/Lesson.entity.js";

export type EditLessonRepo = ({
  data,
}: {
  data: Partial<LessonEntity>;
}) => Promise<LessonEntity>;
