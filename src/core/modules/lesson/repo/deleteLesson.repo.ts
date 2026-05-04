import { LessonEntity } from "../entity/Lesson.entity.js";

export type DeleteLessonRepo = ({
  id,
}: {
  id: string;
}) => Promise<LessonEntity>;
