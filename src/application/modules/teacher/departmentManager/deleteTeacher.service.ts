import { DeleteTeacherService } from "../../../../core/modules/teacher/service/departmentManager/deleteTeacher.service.js";
import { AppError } from "../../../error.js";

export const deleteTeacherService: DeleteTeacherService = async ({
  id,
  userId,
  deleteTeacherRepo,
  getDepartmentManagerByUserIdRepo,
  getTeacherDepartmentGroupListRepo,
}) => {
  const departmentManager = await getDepartmentManagerByUserIdRepo({
    userId,
  });
  if (!departmentManager) throw new AppError("مدیر دانشکده یافت نشد", 404);

  const departmentGroupList = await getTeacherDepartmentGroupListRepo({
    teacherId: id,
  });

  if (
    departmentGroupList.find(
      (departmentGroup) =>
        departmentGroup.departmentId !== departmentManager.departmentId
    )
  )
    throw new AppError(
      "شما فقط مجاز به حذف استاد کاملا مرتبط با گروه های آموزشی دانشکده خودتان هستید",
      403
    );

  await deleteTeacherRepo({
    id,
  });

  return {
    code: 200,
    message: "استاد مورد نظر حذف گردید",
  };
};
