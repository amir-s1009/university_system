import { Response } from "../../../../response.js";
import { EditDepartmentGroupRepo } from "../../repo/editDepartmentGroup.repo.js";
import { EditDepartmentGroupSchema } from "../../schema/departmentManager/editDepartmentGroup.schema.js";

export type EditDepartmentGroupService = ({
  data,
  userId,
  editDepartmentGroupRepo,
}: {
  data: EditDepartmentGroupSchema;
  userId: string;
  editDepartmentGroupRepo: EditDepartmentGroupRepo;
}) => Response;
