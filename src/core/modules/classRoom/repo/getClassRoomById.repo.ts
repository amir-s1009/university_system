import { ClassRoomEntity } from "../entity/ClassRoom.entity.js";

export type GetClassRoomByIdRepo = ({
  id,
}: {
  id: string;
}) => Promise<ClassRoomEntity | null>;
