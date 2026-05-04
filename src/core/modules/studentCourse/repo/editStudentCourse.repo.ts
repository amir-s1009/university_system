import { StudentCourseEntity } from "../entity/StudentCourse.entity.js";

export type EditStudentCourseRepo = ({
  data,
}: {
  data: Partial<StudentCourseEntity>;
}) => Promise<StudentCourseEntity>;
