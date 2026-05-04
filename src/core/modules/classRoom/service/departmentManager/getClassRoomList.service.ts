import { Response } from "../../../../response.js";
import { ClassRoomListItemDTO } from "../../dto/departmentManager/classRoomListItem.dto.js";
import { GetClassRoomListRepo } from "../../repo/departmentManager/getClassRoomListItem.repo.js";

export type GetClassRoomListService = ({
  userId,
  getClassRoomListRepo,
}: {
  userId: string;
  getClassRoomListRepo: GetClassRoomListRepo;
}) => Response<ClassRoomListItemDTO[]>;
