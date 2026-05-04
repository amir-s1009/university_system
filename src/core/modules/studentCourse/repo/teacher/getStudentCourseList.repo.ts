import { StudentCourseListItemDTO } from "../../dto/teacher/studentCourseListItem.dto.js";

export type GetStudentCourseListRepo = ({
  courseId,
  teacherId,
}: {
  courseId: string;
  teacherId: string;
}) => Promise<StudentCourseListItemDTO[]>;
