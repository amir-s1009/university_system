import { TxClient } from "../../../../../infrastructure/prisma.js";
import { CourseListItemDTO } from "../../dto/departmentGroupManager/courseListItem.dto.js";

export type GetCourseListRepo = (
  {
    departmentGroupId,
  }: {
    departmentGroupId: string;
  },
  tx?: TxClient
) => Promise<CourseListItemDTO[]>;
