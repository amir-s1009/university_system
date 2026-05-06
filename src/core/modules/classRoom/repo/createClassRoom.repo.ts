import { TxClient } from "../../../../infrastructure/prisma.js";
import { ClassRoomEntity } from "../entity/ClassRoom.entity.js";

export type CreateClassRoomRepo = (
  {
    data,
  }: {
    data: Pick<ClassRoomEntity, "number" | "departmentId">;
  },
  tx?: TxClient
) => Promise<ClassRoomEntity>;
