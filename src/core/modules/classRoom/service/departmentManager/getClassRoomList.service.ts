import { Response } from "../../../../response.js";
import { GetDepartmentManagerByUserIdRepo } from "../../../departmentManager/repo/getDepartmentManagerByUserId.repo.js";
import { ClassRoomListItemDTO } from "../../dto/departmentManager/classRoomListItem.dto.js";
import { GetClassRoomListRepo } from "../../repo/departmentManager/getClassRoomListItem.repo.js";

export type GetClassRoomListService = ({
  userId,
  getClassRoomListRepo,
  getDepartmentManagerByUserIdRepo,
}: {
  userId: string;
  getClassRoomListRepo: GetClassRoomListRepo;
  getDepartmentManagerByUserIdRepo: GetDepartmentManagerByUserIdRepo;
}) => Response<ClassRoomListItemDTO[]>;
