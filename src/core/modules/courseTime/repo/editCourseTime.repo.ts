import { TxClient } from "../../../../infrastructure/prisma.js";
import { CourseTimeEntity } from "../entity/CourseTime.entity.js";

export type EditCourseTimeRepo = (
  {
    data,
  }: {
    data: Partial<CourseTimeEntity>;
  },
  tx?: TxClient
) => Promise<CourseTimeEntity>;
