import { Day, TimeRange } from "@prisma/client";

export type CourseTimeEntity = {
  id: string;
  day: Day;
  time: TimeRange;
  courseId: string;
  classRoomId:string;
};
