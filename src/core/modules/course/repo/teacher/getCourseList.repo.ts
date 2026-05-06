import { TxClient } from "../../../../../infrastructure/prisma.js";
import { CourseListItemDTO } from "../../dto/teacher/courseListItem.dto.js";

export type GetCourseListRepo = (
  {
    teacherId,
    departmentGroupId,
  }: {
    teacherId: string;
    departmentGroupId?: string;
  },
  tx?: TxClient
) => Promise<CourseListItemDTO[]>;
