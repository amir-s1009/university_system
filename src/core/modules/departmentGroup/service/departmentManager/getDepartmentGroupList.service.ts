import { Response } from "../../../../response.js";
import { DepartmentGroupListItemDTO } from "../../dto/departmentManager/departmentGroupListItem.dto.js";
import { GetDepartmentGroupListRepo } from "../../repo/departmentManager/getDepartmentGroupList.repo.js";

export type GetDepartmentGroupListService = ({
  getDepartmentGroupListRepo,
}: {
  getDepartmentGroupListRepo: GetDepartmentGroupListRepo;
}) => Response<DepartmentGroupListItemDTO[]>;
