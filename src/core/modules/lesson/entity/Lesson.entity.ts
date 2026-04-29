import { LessonType } from "@prisma/client";

export type LessonEntity = {
  id: string;
  title: string;
  coefficient: number;
  departmentGroupId: string;
  lessonType: LessonType;
};
