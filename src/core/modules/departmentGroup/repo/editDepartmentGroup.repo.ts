import { DepartmentGroupEntity } from "../entity/DepartmentGroup.entity.js";

export type EditDepartmentGroupRepo = ({
  data,
}: {
  data: DepartmentGroupEntity;
}) => Promise<DepartmentGroupEntity>;
