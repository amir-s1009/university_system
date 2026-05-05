import { TxClient } from "../../../../infrastructure/prisma.js";
import { CourseEntity } from "../entity/Course.entity.js";

export type DeleteCourseRepo = (
  {
    id,
  }: {
    id: string;
  },
  tx?: TxClient
) => Promise<CourseEntity>;
