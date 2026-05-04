import { StudentCourseListItemDTO } from "../../dto/student/studentCourseListItem.dto.js";

export type GetStudentCourseListRepo = ({
  semesterId,
}: {
  semesterId: string;
}) => Promise<StudentCourseListItemDTO[]>;
