import { Response } from "../../../../response.js";
import { EditDepartmentGroupManagerRepo } from "../../../departmentGroupManager/repo/editDepartmentGroupManager.repo.js";
import { GetDepartmentGroupManagerByIdRepo } from "../../../departmentGroupManager/repo/getDepartmentGroupManagerById.repo.js";
import { GetDepartmentManagerByUserIdRepo } from "../../../departmentManager/repo/getDepartmentManagerByUserId.repo.js";
import { GetDepartmentGroupByIdRepo } from "../../repo/getDepartmentGroupById.repo.js";
import { ChangeDepartmentGroupManagerSchema } from "../../schema/departmentManager/changeDepartmentGroupManager.schema.js";

export type ChangeDepartmentGroupManagerService = ({
  data,
  userId,
  editDepartmentGroupManagerRepo,
  getDepartmentGroupManagerByIdRepo,
  getDepartmentManagerByUserIdRepo,
  getDepartmentGroupByIdRepo,
}: {
  data: ChangeDepartmentGroupManagerSchema;
  userId: string;
  editDepartmentGroupManagerRepo: EditDepartmentGroupManagerRepo;
  getDepartmentGroupManagerByIdRepo: GetDepartmentGroupManagerByIdRepo;
  getDepartmentManagerByUserIdRepo: GetDepartmentManagerByUserIdRepo;
  getDepartmentGroupByIdRepo: GetDepartmentGroupByIdRepo;
}) => Response;
