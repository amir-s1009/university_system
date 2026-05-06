import { Response } from "../../../../response.js";
import { GetDepartmentManagerByUserIdRepo } from "../../../departmentManager/repo/getDepartmentManagerByUserId.repo.js";
import { EditDepartmentGroupRepo } from "../../repo/editDepartmentGroup.repo.js";
import { GetDepartmentGroupByIdRepo } from "../../repo/getDepartmentGroupById.repo.js";
import { EditDepartmentGroupSchema } from "../../schema/departmentManager/editDepartmentGroup.schema.js";

export type EditDepartmentGroupService = ({
  data,
  userId,
  editDepartmentGroupRepo,
  getDepartmentManagerByUserIdRepo,
  getDepartmentGroupByIdRepo,
}: {
  data: EditDepartmentGroupSchema;
  userId: string;
  editDepartmentGroupRepo: EditDepartmentGroupRepo;
  getDepartmentManagerByUserIdRepo: GetDepartmentManagerByUserIdRepo;
  getDepartmentGroupByIdRepo: GetDepartmentGroupByIdRepo;
}) => Response;
