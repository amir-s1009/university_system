import { ChangeDepartmentGroupManagerService } from "../../../../core/modules/departmentGroup/service/departmentManager/changeDepartmentGroupManager.service.js";
import { AppError } from "../../../error.js";

export const changeDepartmentGroupManagerService: ChangeDepartmentGroupManagerService =
  async ({
    data,
    userId,
    editDepartmentGroupManagerRepo,
    getDepartmentGroupManagerByIdRepo,
    getDepartmentManagerByUserIdRepo,
    getDepartmentGroupByIdRepo,
  }) => {
    const departmentManager = await getDepartmentManagerByUserIdRepo({
      userId,
    });
    if (!departmentManager) throw new AppError("مدیر دانشکده یافت نشد", 404);

    const departmentGroupManager = await getDepartmentGroupManagerByIdRepo({
      id: data.body.departmentGroupManagerId,
    });
    if (!departmentGroupManager)
      throw new AppError("مدیر گروه مورد نظر یافت نشد", 404);

    const departmentGroup = await getDepartmentGroupByIdRepo({
      id: departmentGroupManager.departmentGroupId,
    });
    if (!departmentGroup)
      throw new AppError("گروه آموزشی مورد نظر یافت نشد", 404);

    if (departmentGroup.departmentId !== departmentManager.departmentId)
      throw new AppError(
        "شما فقط مجاز به تغییر مدیر گروه آموزشی مرتبط با دانشکده خود هستید",
        403
      );

    await editDepartmentGroupManagerRepo({
      data: {
        id: data.body.departmentGroupManagerId,
        userId: data.body.userId,
      },
    });

    return {
      ok: true,
      code: 200,
      message: "مدیر گروه مورد نظر تغییر یافت",
    };
  };
