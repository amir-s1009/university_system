import { Response } from "../../../../response.js";
import { DeleteClassRoomRepo } from "../../repo/deleteClassRoom.repo.js";

export type DeleteClassRoomService = ({
  id,
  deleteClassRoomRepo,
}: {
  id: string;
  deleteClassRoomRepo: DeleteClassRoomRepo;
}) => Response;
