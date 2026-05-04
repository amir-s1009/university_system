import { Response } from "../../../../response.js";
import { DepartmentGroupListItemDTO } from "../../dto/teacher/departmentGroupListItem.dto.js";
import { GetDepartmentGroupListRepo } from "../../repo/teacher/getDepartmentGroupList.repo.js";

export type GetDepartmentGroupListService = ({
  userId,
  getDepartmentGroupListRepo,
}: {
  userId: string;
  getDepartmentGroupListRepo: GetDepartmentGroupListRepo;
}) => Response<DepartmentGroupListItemDTO[]>;
