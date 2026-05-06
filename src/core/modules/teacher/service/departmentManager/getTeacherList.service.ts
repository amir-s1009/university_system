import { Response } from "../../../../response.js";
import { GetDepartmentManagerByUserIdRepo } from "../../../departmentManager/repo/getDepartmentManagerByUserId.repo.js";
import { TeacherListItemDTO } from "../../dto/departmentManager/teacherListItem.dto.js";
import { GetTeacherListRepo } from "../../repo/departmentManager/getTeacherList.repo.js";

export type GetTeacherListService = ({
  userId,
  getTeacherListRepo,
  getDepartmentManagerByUserIdRepo,
}: {
  userId: string;
  getTeacherListRepo: GetTeacherListRepo;
  getDepartmentManagerByUserIdRepo: GetDepartmentManagerByUserIdRepo;
}) => Response<TeacherListItemDTO[]>;
