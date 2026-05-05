import { EditDepartmentGroupService } from "../../../../core/modules/departmentGroup/service/departmentManager/editDepartmentGroup.service.js";
import { AppError } from "../../../error.js";

export const editDepartmentGroupService: EditDepartmentGroupService = async ({
  data,
  userId,
  editDepartmentGroupRepo,
  getDepartmentManagerByUserIdRepo,
  getDepartmentGroupByIdRepo,
}) => {
  const departmentManager = await getDepartmentManagerByUserIdRepo({
    userId,
  });
  if (!departmentManager) throw new AppError("مدیر دانشکده یافت نشد", 404);

  const departmentGroup = await getDepartmentGroupByIdRepo({
    id: data.params.id,
  });
  if (!departmentGroup) throw new AppError("گروه آموزشی یافت نشد", 404);

  if (departmentManager.departmentId !== departmentGroup.departmentId)
    throw new AppError(
      "شما فقط مجاز به ویرایش گروه آموزشی دانشکده خود هستید",
      403
    );

  await editDepartmentGroupRepo({
    data: {
      id: data.params.id,
      title: data.body.title,
    },
  });

  return {
    code: 200,
    message: "گروه آموزشی ایجاد گردید",
  };
};
