import { Response } from "../../../../response.js";
import { GetDepartmentGroupManagerByUserIdRepo } from "../../../departmentGroupManager/repo/getDepartmentGroupManagerByUserId.repo.js";
import { StudentListItemDTO } from "../../dto/departmentGroupManager/studentListItem.dto.js";
import { GetStudentListRepo } from "../../repo/departmentGroupManager/getStudentList.repo.js";

export type GetStudentListService = ({
  userId,
  getStudentListRepo,
  getDepartmentGroupManagerByUserIdRepo,
}: {
  userId: string;
  getDepartmentGroupManagerByUserIdRepo: GetDepartmentGroupManagerByUserIdRepo;
  getStudentListRepo: GetStudentListRepo;
}) => Response<StudentListItemDTO[]>;
