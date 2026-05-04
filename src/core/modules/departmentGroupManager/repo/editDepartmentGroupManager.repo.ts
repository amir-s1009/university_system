import { DepartmentGroupManagerEntity } from "../entity/DepartmentGroupManager.entity.js";

export type EditDepartmentGroupManagerRepo = ({
  data,
}: {
  data: Partial<DepartmentGroupManagerEntity>;
}) => Promise<DepartmentGroupManagerEntity>;
