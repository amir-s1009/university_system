import { Response } from "../../../../response.js";
import { CreateClassRoomSchema } from "../../schema/departmentManager/createClassRoom.schema.js";

export type CreateClassRoomService = ({
  data,
}: {
  data: CreateClassRoomSchema[];
}) => Response;
