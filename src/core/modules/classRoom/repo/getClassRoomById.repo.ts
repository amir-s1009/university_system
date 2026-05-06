import { TxClient } from "../../../../infrastructure/prisma.js";
import { ClassRoomEntity } from "../entity/ClassRoom.entity.js";

export type GetClassRoomByIdRepo = (
  {
    id,
  }: {
    id: string;
  },
  tx?: TxClient
) => Promise<ClassRoomEntity | null>;
