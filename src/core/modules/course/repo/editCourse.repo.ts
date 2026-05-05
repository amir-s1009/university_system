import { TxClient } from "../../../../infrastructure/prisma.js";
import { CourseEntity } from "../entity/Course.entity.js";

export type EditCourseRepo = (
  {
    data,
  }: {
    data: Partial<CourseEntity>;
  },
  tx?: TxClient
) => Promise<CourseEntity>;
