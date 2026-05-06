import { TxClient } from "../../../../infrastructure/prisma.js";
import { CourseTimeEntity } from "../entity/CourseTime.entity.js";

export type CreateCourseTimeRepo = (
  {
    data,
  }: {
    data: Pick<CourseTimeEntity, "classRoomId" | "day" | "time" | "courseId">;
  },
  tx?: TxClient
) => Promise<CourseTimeEntity>;
