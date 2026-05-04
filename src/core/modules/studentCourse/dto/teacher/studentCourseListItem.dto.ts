import { StudentCourseStatus, StudentStatus, StudyMode } from "@prisma/client";

export type StudentCourseListItemDTO = {
  id: string;
  student: {
    user: {
      firstName: string;
      lastName: string;
    };
  };
  score?: number | null;
  status: StudentCourseStatus;
};
