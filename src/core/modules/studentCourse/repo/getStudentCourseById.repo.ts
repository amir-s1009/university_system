import { StudentCourseEntity } from "../entity/StudentCourse.entity.js";

export type GetStudentCourseByIdRepo = ({
  id,
}: {
  id: string;
}) => Promise<StudentCourseEntity | null>;
