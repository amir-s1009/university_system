import { ClassRoomEntity } from "../entity/ClassRoom.entity.js";

export type DeleteClassRoomRepo = ({
  id,
}: {
  id: string;
}) => Promise<ClassRoomEntity>;
