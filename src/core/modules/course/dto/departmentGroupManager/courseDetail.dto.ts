import { Day, TimeRange } from "@prisma/client";

export type CourseDetailDTO = {
  id: string;
  number: number;
  capacity: number;
  remaining: number;
  examAt?: Date | null;
  cancelled: boolean;
  lessonId: string;
  lesson: {
    title: string;
  };
  times: {
    id: string;
    day: Day;
    time: TimeRange;
    courseId: string;
    classRoomId: string;
    classRoom: {
      number: number;
    };
  }[];
  teacherId: string;
  teacher: {
    user: {
      firstName: string;
      lastName: string;
    };
  };
  semesterId: string;
  semester: {
    year: number;
    isFirstSemester: boolean;
  };
};
