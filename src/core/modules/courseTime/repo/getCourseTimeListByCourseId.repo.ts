import { TxClient } from "../../../../infrastructure/prisma.js";
import { CourseTimeEntity } from "../entity/CourseTime.entity.js";

export type GetCourseTimeListByCourseIdRepo = (
  {
    courseId,
  }: {
    courseId: string;
  },
  tx?: TxClient
) => Promise<CourseTimeEntity[]>;
