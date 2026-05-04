import { Response } from "../../../../response.js";
import { ChangeDepartmentGroupManagerSchema } from "../../schema/departmentManager/changeDepartmentGroupManager.schema.js";

export type ChangeDepartmentGroupManagerService = ({
  data,
  userId,
}: {
  data: ChangeDepartmentGroupManagerSchema;
  userId: string;
}) => Response;
