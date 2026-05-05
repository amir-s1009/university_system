import { Response } from "../../../../response.js";
import { GetDepartmentManagerByUserIdRepo } from "../../../departmentManager/repo/getDepartmentManagerByUserId.repo.js";
import { DepartmentGroupListItemDTO } from "../../dto/departmentManager/departmentGroupListItem.dto.js";
import { GetDepartmentGroupListRepo } from "../../repo/departmentManager/getDepartmentGroupList.repo.js";

export type GetDepartmentGroupListService = ({
  userId,
  getDepartmentGroupListRepo,
  getDepartmentManagerByUserIdRepo,
}: {
  userId: string;
  getDepartmentGroupListRepo: GetDepartmentGroupListRepo;
  getDepartmentManagerByUserIdRepo: GetDepartmentManagerByUserIdRepo;
}) => Response<DepartmentGroupListItemDTO[]>;
