import { DepartmentGroupEntity } from "../entity/DepartmentGroup.entity.js";

export type CreateDepartmentGroupRepo = ({
  data,
}: {
  data: Pick<DepartmentGroupEntity, "departmentId" | "title">;
}) => Promise<DepartmentGroupEntity>;
