import { DepartmentGroupManagerEntity } from "../entity/DepartmentGroupManager.entity.js";

export type GetDepartmentGroupManagerByIdRepo = ({
  id,
}: {
  id: string;
}) => Promise<DepartmentGroupManagerEntity | null>;
