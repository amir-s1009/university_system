import { TxClient } from "../../../../../infrastructure/prisma.js";
import { LessonListItemDTO } from "../../dto/departmentGroupManager/lessonListItem.dto.js";

export type GetLessonListRepo = (
  {
    departmentGroupId,
  }: {
    departmentGroupId: string;
  },
  tx?: TxClient
) => Promise<LessonListItemDTO[]>;
