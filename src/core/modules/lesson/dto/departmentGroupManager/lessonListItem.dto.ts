import { LessonType } from "@prisma/client";

export type LessonListItemDTO = {
  id: string;
  title: string;
  coefficient: number;
  departmentGroupId: string;
  lessonType: LessonType;
};
