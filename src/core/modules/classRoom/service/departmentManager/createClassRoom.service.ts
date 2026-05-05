import { Response } from "../../../../response.js";
import { GetDepartmentManagerByUserIdRepo } from "../../../departmentManager/repo/getDepartmentManagerByUserId.repo.js";
import { CreateClassRoomRepo } from "../../repo/createClassRoom.repo.js";
import { CreateClassRoomSchema } from "../../schema/departmentManager/createClassRoom.schema.js";

export type CreateClassRoomService = ({
  userId,
  data,
  createClassRoomRepo,
  getDepartmentManagerByUserIdRepo,
}: {
  userId: string;
  data: CreateClassRoomSchema;
  createClassRoomRepo: CreateClassRoomRepo;
  getDepartmentManagerByUserIdRepo: GetDepartmentManagerByUserIdRepo;
}) => Response;
