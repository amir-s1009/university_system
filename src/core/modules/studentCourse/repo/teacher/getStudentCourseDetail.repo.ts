import { StudentCourseDetailDTO } from "../../dto/teacher/studentCourseDetail.dto.js";

export type GetStudentCourseDetailRepo = ({
  id,
  teacherId,
}: {
  id: string;
  teacherId: string;
}) => Promise<StudentCourseDetailDTO | null>;
