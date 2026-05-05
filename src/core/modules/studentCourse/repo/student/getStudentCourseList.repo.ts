import { TxClient } from "../../../../../infrastructure/prisma.js";
import { StudentCourseListItemDTO } from "../../dto/student/studentCourseListItem.dto.js";

export type GetStudentCourseListRepo = (
  {
    studentId,
    semesterId,
  }: {
    studentId: string;
    semesterId: string;
  },
  tx?: TxClient
) => Promise<StudentCourseListItemDTO[]>;
