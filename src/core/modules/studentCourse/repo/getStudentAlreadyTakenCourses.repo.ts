import { TxClient } from "../../../../infrastructure/prisma.js";
import { CourseEntity } from "../../course/entity/Course.entity.js";
import { LessonEntity } from "../../lesson/entity/Lesson.entity.js";
import { StudentCourseEntity } from "../entity/StudentCourse.entity.js";

export type GetStudentAlreadyTakenCoursesRepo = (
  {
    studentId,
    semesterId,
  }: {
    studentId: string;
    semesterId?: string;
  },
  tx?: TxClient
) => Promise<
  (StudentCourseEntity & {
    course: CourseEntity & {
      lesson: LessonEntity;
    };
  })[]
>;
