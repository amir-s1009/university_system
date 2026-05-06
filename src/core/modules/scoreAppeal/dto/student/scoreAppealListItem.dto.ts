import { StudentCourseStatus } from "@prisma/client";

export type ScoreAppealListItemDTO = {
  id: string;
  studentCourse: {
    course: {
      lesson: {
        title: string;
        coefficient: number;
      };
      teacher: {
        user: {
          firstName: string;
          lastName: string;
        };
      };
    };
    score: string;
    status: StudentCourseStatus;
  };
  requestionMessage: string;
  responseMessage: string | null;
};
