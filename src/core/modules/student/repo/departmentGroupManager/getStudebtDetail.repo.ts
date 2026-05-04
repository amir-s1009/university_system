import { StudentDetailDTO } from "../../dto/departmentGroupManager/studentDetail.dto.js";

export type GetStudentDetailRepo = ({
  id,
}: {
  id: string;
}) => Promise<StudentDetailDTO | null>;
