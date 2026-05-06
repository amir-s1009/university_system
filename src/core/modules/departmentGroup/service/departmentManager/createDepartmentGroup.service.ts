import { Response } from "../../../../response.js";
import { GetDepartmentManagerByUserIdRepo } from "../../../departmentManager/repo/getDepartmentManagerByUserId.repo.js";
import { CreateDepartmentGroupRepo } from "../../repo/createDepartmentGroup.repo.js";
import { CreateDepartmentGroupSchema } from "../../schema/departmentManager/createDepartmentGroup.schema.js";

export type CreateDepartmentGroupService = ({
  data,
  userId,
  createDepartmentGroupRepo,
  getDepartmentManagerByUserIdRepo,
}: {
  data: CreateDepartmentGroupSchema;
  userId: string;
  createDepartmentGroupRepo: CreateDepartmentGroupRepo;
  getDepartmentManagerByUserIdRepo: GetDepartmentManagerByUserIdRepo;
}) => Response;
