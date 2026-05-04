import { DepartmentGroupEntity } from "../entity/DepartmentGroup.entity.js";

export type GetDepartmentGroupByIdRepo = ({
  id,
}: {
  id: string;
}) => Promise<DepartmentGroupEntity | null>;
