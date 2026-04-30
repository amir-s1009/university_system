import { Response } from "../../../../response.js";
import { CreateDepartmentGroupRepo } from "../../repo/createDepartmentGroup.repo.js";
import { CreateDepartmentGroupSchema } from "../../schema/departmentManager/createDepartmentGroup.schema.js";

export type CreateDepartmentGroupService = ({
  data,
  userId,
  createDepartmentGroupRepo,
}: {
  data: CreateDepartmentGroupSchema;
  userId: string;
  createDepartmentGroupRepo: CreateDepartmentGroupRepo;
}) => Response;
