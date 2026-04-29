import { StudentCourseStatus } from "@prisma/client";

export type StudentCourseEntity = {
  id: string;
  studentId: string;
  courseId: string;
  score?: number | null;
  status: StudentCourseStatus;
};
