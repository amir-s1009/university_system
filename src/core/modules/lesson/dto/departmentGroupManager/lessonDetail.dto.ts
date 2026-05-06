import { LessonType } from "@prisma/client";

export type LessonDetailDTO = {
  id: string;
  title: string;
  coefficient: number;
  departmentGroupId: string;
  lessonType: LessonType;
};
