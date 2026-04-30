import { DepartmentGroupDetailDTO } from "../../dto/departmentManager/departmentGroupDetail.dto.js";

export type GetDepartmentGroupDetailRepo = ({
  id,
}: {
  id: string;
}) => Promise<DepartmentGroupDetailDTO | null>;
