import { GetTeacherListService } from "../../../../core/modules/teacher/service/departmentManager/getTeacherList.service.js";
import { AppError } from "../../../error.js";

export const getTeacherListService: GetTeacherListService = async ({
  userId,
  getTeacherListRepo,
  getDepartmentManagerByUserIdRepo,
}) => {
  const departmentManager = await getDepartmentManagerByUserIdRepo({
    userId,
  });
  if (!departmentManager) throw new AppError("مدیر دانشکده یافت نشد", 404);

  const teachers = await getTeacherListRepo({
    departmentId: departmentManager.departmentId,
  });

  return {
    code: 200,
    data: teachers,
  };
};
