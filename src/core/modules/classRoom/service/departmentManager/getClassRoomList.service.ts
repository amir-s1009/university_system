import { Response } from "../../../../response.js";
import { ClassRoomListItemDTO } from "../../dto/departmentManager/classRoomListItem.dto.js";

export type GetClassRoomListService = ({
  userId,
}: {
  userId: string;
}) => Response<ClassRoomListItemDTO[]>;
