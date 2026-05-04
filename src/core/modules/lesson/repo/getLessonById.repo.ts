import { LessonEntity } from "../entity/Lesson.entity.js";

export type GetLessonByIdRepo = ({
  id,
}: {
  id: string;
}) => Promise<LessonEntity | null>;
