import { StudentCourseEntity } from "../entity/StudentCourse.entity.js";

export type CreateStudentCourseRepo = ({
  data,
}: {
  data: Pick<
    StudentCourseEntity,
    "courseId" | "score" | "status" | "studentId"
  >;
}) => Promise<StudentCourseEntity>;
