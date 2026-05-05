import { TxClient } from "../../../../infrastructure/prisma.js";
import { LessonEntity } from "../entity/Lesson.entity.js";

export type EditLessonRepo = (
  {
    data,
  }: {
    data: Partial<LessonEntity>;
  },
  tx?: TxClient
) => Promise<LessonEntity>;
