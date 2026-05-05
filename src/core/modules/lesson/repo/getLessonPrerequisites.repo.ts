import { TxClient } from "../../../../infrastructure/prisma.js";
import { LessonEntity } from "../entity/Lesson.entity.js";

export type GetLessonPrerequisitesRepo = (
  {
    id,
  }: {
    id: string;
  },
  tx?: TxClient
) => Promise<LessonEntity[]>;
