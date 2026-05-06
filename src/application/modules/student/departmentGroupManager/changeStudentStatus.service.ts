import { ChangeStudentStatusService } from "../../../../core/modules/student/service/departmentGroupManager/changeStudentStatus.service.js";
import { AppError } from "../../../error.js";

export const changeStudentStatusService: ChangeStudentStatusService = async ({
  data,
  userId,
  editStudentRepo,
  getStudentByIdRepo,
  getDepartmentGroupManagerByUserIdRepo,
}) => {
  const departmentGroupManager = await getDepartmentGroupManagerByUserIdRepo({
    userId,
  });
  if (!departmentGroupManager)
    throw new AppError("مدیر گروه آموزشی یافت نشد", 404);

  const student = await getStudentByIdRepo({
    id: data.body.id,
  });
  if (!student) throw new AppError("دانشجو یافت نشد", 404);

  if (departmentGroupManager.departmentGroupId !== student.departmentGroupId)
    throw new AppError(
      "شما فقط مجاز به تغییر وضعیت دانشجوی گروه آموزشی خودتان هستبد",
      403
    );

  await editStudentRepo({
    data: {
      id: data.body.id,
      status: data.body.status,
    },
  });

  return {
    code: 200,
    message: "وضعیت دانشجو تغییر یافت",
  };
};
