import { TxClient } from "../../../../infrastructure/prisma.js";
import { StudentCourseEntity } from "../entity/StudentCourse.entity.js";

export type GetStudentCourseByIdRepo = (
  {
    id,
  }: {
    id: string;
  },
  tx?: TxClient
) => Promise<StudentCourseEntity | null>;
