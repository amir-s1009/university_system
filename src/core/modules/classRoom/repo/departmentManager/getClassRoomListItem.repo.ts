import { ClassRoomListItemDTO } from "../../dto/departmentManager/classRoomListItem.dto.js";

export type GetClassRoomListRepo = () => Promise<ClassRoomListItemDTO[]>;
