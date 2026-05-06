import { GetClassRoomListService } from "../../../../core/modules/classRoom/service/departmentManager/getClassRoomList.service.js";
import { AppError } from "../../../error.js";

export const getClassRoomListService: GetClassRoomListService = async ({
  userId,
  getClassRoomListRepo,
  getDepartmentManagerByUserIdRepo,
}) => {
  const departmentManager = await getDepartmentManagerByUserIdRepo({
    userId,
  });
  if (!departmentManager) throw new AppError("مدیر دانشکده یافت نشد", 404);

  const classRooms = await getClassRoomListRepo({
    departmentId: departmentManager.departmentId,
  });

  return {
    code: 200,
    data: classRooms,
  };
};
