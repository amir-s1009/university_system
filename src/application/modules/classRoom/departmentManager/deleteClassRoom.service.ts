import { DeleteClassRoomService } from "../../../../core/modules/classRoom/service/departmentManager/deleteClassRoom.service.js";

export const deleteClassRoomService: DeleteClassRoomService = async ({
  id,
  deleteClassRoomRepo,
}) => {
  await deleteClassRoomRepo({
    id,
  });

  return {
    ok: true,
    code: 200,
    message: "کلاس مورد نظر حذف شد",
  };
};
