import { StudyMode } from "@prisma/client";

export type StudentEntity = {
  id: string;
  userId: string;
  enteranceSemesterId: string;
  studyMode: StudyMode;
  departmentGroupId: string;
};
