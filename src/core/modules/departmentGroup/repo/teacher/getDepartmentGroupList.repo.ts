import { DepartmentGroupListItemDTO } from "../../dto/teacher/departmentGroupListItem.dto.js";

export type GetDepartmentGroupListRepo = ({
  teacherId,
}: {
  teacherId: string;
}) => Promise<DepartmentGroupListItemDTO[]>;
