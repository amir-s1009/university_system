import { TxClient } from "../../../../../infrastructure/prisma.js";
import { LessonDetailDTO } from "../../dto/departmentGroupManager/lessonDetail.dto.js";

export type GetLessonDetailRepo = (
  {
    id,
  }: {
    id: string;
  },
  tx?: TxClient
) => Promise<LessonDetailDTO | null>;
