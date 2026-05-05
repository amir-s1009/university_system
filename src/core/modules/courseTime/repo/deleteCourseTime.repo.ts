import { TxClient } from "../../../../infrastructure/prisma.js";
import { CourseTimeEntity } from "../entity/CourseTime.entity.js";

export type DeleteCourseTimeRepo = (
  {
    id,
  }: {
    id: string;
  },
  tx?: TxClient
) => Promise<CourseTimeEntity>;
