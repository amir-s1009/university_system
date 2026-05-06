import { Response } from "../../../../response.js";
import { DepartmentGroupDetailDTO } from "../../dto/departmentManager/departmentGroupDetail.dto.js";
import { GetDepartmentGroupDetailRepo } from "../../repo/departmentManager/getDepartmentGroupDetail.repo.js";

export type GetDepartmentGroupDetailService = ({
  id,
  getDepartmentGroupDetailRepo,
}: {
  id: string;
  getDepartmentGroupDetailRepo: GetDepartmentGroupDetailRepo;
}) => Response<DepartmentGroupDetailDTO>;
