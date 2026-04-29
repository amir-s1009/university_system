export type CourseEntity = {
  id: string;
  number: number;
  capacity: number;
  examAt?: Date | null;
  canceled: boolean;
  lessonId: string;
  teacherId: string;
  classRoomId: string;
  semesterId: string;
};
