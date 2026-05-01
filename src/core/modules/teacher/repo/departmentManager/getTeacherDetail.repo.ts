import { TeacherDetailDTO } from "../../dto/departmentManager/teacherDetail.dto.js";

export type GetTeacherDetailRepo = ({
  id,
}: {
  id: string;
}) => Promise<TeacherDetailDTO | null>;
