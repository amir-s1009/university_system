import { TxClient } from "../../../../infrastructure/prisma.js";
import { StudentCourseEntity } from "../entity/StudentCourse.entity.js";

export type EditStudentCourseRepo = (
  {
    data,
  }: {
    data: Partial<StudentCourseEntity>;
  },
  tx?: TxClient
) => Promise<StudentCourseEntity>;
