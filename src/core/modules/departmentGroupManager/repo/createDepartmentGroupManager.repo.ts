import { DepartmentGroupManagerEntity } from "../entity/DepartmentGroupManager.entity.js";

export type CreateDepartmentGroupManagerRepo = ({
  data,
}: {
  data: Pick<DepartmentGroupManagerEntity, "userId" | "departmentGroupId">;
}) => Promise<DepartmentGroupManagerEntity>;
