import { Response } from "../../../../response.js";
import { GetDepartmentManagerByUserIdRepo } from "../../../departmentManager/repo/getDepartmentManagerByUserId.repo.js";
import { DeleteTeacherRepo } from "../../repo/deleteTeacher.repo.js";
import { GetTeacherDepartmentGroupListRepo } from "../../repo/getTeacherDepartmentGroupList.repo.js";

export type DeleteTeacherService = ({
  id,
  userId,
  deleteTeacherRepo,
  getDepartmentManagerByUserIdRepo,
  getTeacherDepartmentGroupListRepo,
}: {
  userId: string;
  id: string;
  deleteTeacherRepo: DeleteTeacherRepo;
  getDepartmentManagerByUserIdRepo: GetDepartmentManagerByUserIdRepo;
  getTeacherDepartmentGroupListRepo: GetTeacherDepartmentGroupListRepo;
}) => Response;
