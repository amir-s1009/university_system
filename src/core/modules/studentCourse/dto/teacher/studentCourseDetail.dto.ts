import { StudentCourseStatus, StudentStatus, StudyMode } from "@prisma/client";

export type StudentCourseDetailDTO = {
  id: string;
  student: {
    id: string;
    studyMode: StudyMode;
    status: StudentStatus;
    user: {
      firstName: string;
      lastName: string;
    };
  };
  score?: number | null;
  status: StudentCourseStatus;
};
