import { DepartmentGroupListItemDTO } from "../../dto/departmentManager/departmentGroupListItem.dto.js";

export type GetDepartmentGroupListRepo = () => Promise<
  DepartmentGroupListItemDTO[]
>;
