import { TxClient } from "../../../../../infrastructure/prisma.js";
import { StudentCourseDetailDTO } from "../../dto/teacher/studentCourseDetail.dto.js";

export type GetStudentCourseDetailRepo = (
  {
    id,
    teacherId,
  }: {
    id: string;
    teacherId: string;
  },
  tx?: TxClient
) => Promise<StudentCourseDetailDTO | null>;
