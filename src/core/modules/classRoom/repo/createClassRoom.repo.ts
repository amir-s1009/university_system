import { ClassRoomEntity } from "../entity/ClassRoom.entity.js";

export type CreateClassRoomRepo = (
  data: Pick<ClassRoomEntity, "number" | "departmentId">
) => Promise<ClassRoomEntity>;
