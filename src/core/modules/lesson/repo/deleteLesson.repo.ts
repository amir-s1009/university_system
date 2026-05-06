import { TxClient } from "../../../../infrastructure/prisma.js";
import { LessonEntity } from "../entity/Lesson.entity.js";

export type DeleteLessonRepo = (
  {
    id,
  }: {
    id: string;
  },
  tx?: TxClient
) => Promise<LessonEntity>;
