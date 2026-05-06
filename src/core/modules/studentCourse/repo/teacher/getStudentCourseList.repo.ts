import { TxClient } from "../../../../../infrastructure/prisma.js";
import { StudentCourseListItemDTO } from "../../dto/teacher/studentCourseListItem.dto.js";

export type GetStudentCourseListRepo = (
  {
    courseId,
    teacherId,
  }: {
    courseId: string;
    teacherId: string;
  },
  tx?: TxClient
) => Promise<StudentCourseListItemDTO[]>;
