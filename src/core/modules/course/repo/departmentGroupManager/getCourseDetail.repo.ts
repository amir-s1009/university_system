import { TxClient } from "../../../../../infrastructure/prisma.js";
import { CourseDetailDTO } from "../../dto/departmentGroupManager/courseDetail.dto.js";

export type GetCourseDetailRepo = (
  {
    id,
  }: {
    id: string;
  },
  tx?: TxClient
) => Promise<CourseDetailDTO | null>;
