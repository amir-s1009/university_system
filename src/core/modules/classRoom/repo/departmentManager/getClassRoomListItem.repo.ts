import { TxClient } from "../../../../../infrastructure/prisma.js";
import { ClassRoomListItemDTO } from "../../dto/departmentManager/classRoomListItem.dto.js";

export type GetClassRoomListRepo = ({
  departmentId,
}: {
  departmentId: string;
}, tx?: TxClient) => Promise<ClassRoomListItemDTO[]>;
