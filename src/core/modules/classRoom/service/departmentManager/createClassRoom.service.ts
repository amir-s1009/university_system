import { Response } from "../../../../response.js";
import { CreateClassRoomRepo } from "../../repo/createClassRoom.repo.js";
import { CreateClassRoomSchema } from "../../schema/departmentManager/createClassRoom.schema.js";

export type CreateClassRoomService = ({
  data,
  createClassRoomRepo,
}: {
  data: CreateClassRoomSchema[];
  createClassRoomRepo: CreateClassRoomRepo;
}) => Response;
