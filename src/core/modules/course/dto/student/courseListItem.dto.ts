import { Day, LessonType, TimeRange } from "@prisma/client";

export type CourseListItemDTO = {
  id: string;
  number: number;
  canceled: boolean;
  examAt: Date | null;
  lesson: {
    id: string;
    title: string;
    coefficient: number;
    lessonType: LessonType;
  };
  times: {
    day: Day;
    time: TimeRange;
    classRoom: {
      number: number;
    };
  }[];
  teacher: {
    user: {
      firstName: string;
      lastName: string;
    };
  };
};
