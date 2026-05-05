import { TxClient } from "../../../../../infrastructure/prisma.js";
import { TeacherDetailDTO } from "../../dto/departmentManager/teacherDetail.dto.js";

export type GetTeacherDetailRepo = ({
  id,
}: {
  id: string;
}, tx?: TxClient) => Promise<TeacherDetailDTO | null>;
