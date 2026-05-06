import { CreateClassRoomService } from "../../../../core/modules/classRoom/service/departmentManager/createClassRoom.service.js";
import { AppError } from "../../../error.js";

export const createClassRoomService: CreateClassRoomService = async ({
  data,
  userId,
  createClassRoomRepo,
  getDepartmentManagerByUserIdRepo,
}) => {
  const departmentManager = await getDepartmentManagerByUserIdRepo({
    userId,
  });
  if (!departmentManager) throw new AppError("مدیر دانشکده یافت نشد", 404);
  await createClassRoomRepo({
    data: {
      number: data.body.number,
      departmentId: departmentManager.departmentId,
    },
  });

  return {
    code: 200,
    message: "کلاس مورد نظر ایجاد شد",
  };
};
