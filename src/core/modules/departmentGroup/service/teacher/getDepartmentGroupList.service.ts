import { Response } from "../../../../response.js";
import { GetTeacherByUserIdRepo } from "../../../teacher/repo/getTeacherByUserId.repo.js";
import { DepartmentGroupListItemDTO } from "../../dto/teacher/departmentGroupListItem.dto.js";
import { GetDepartmentGroupListRepo } from "../../repo/teacher/getDepartmentGroupList.repo.js";

export type GetDepartmentGroupListService = ({
  userId,
  getDepartmentGroupListRepo,
  getTeacherByUserIdRepo,
}: {
  userId: string;
  getDepartmentGroupListRepo: GetDepartmentGroupListRepo;
  getTeacherByUserIdRepo: GetTeacherByUserIdRepo;
}) => Response<DepartmentGroupListItemDTO[]>;
