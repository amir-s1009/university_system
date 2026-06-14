import { CreateDepartmentGroupService } from "../../../../core/modules/departmentGroup/service/departmentManager/createDepartmentGroup.service.js";
import { AppError } from "../../../error.js";

export const createDepartmentGroupService: CreateDepartmentGroupService =
  async ({
    data,
    userId,
    getDepartmentManagerByUserIdRepo,
    createDepartmentGroupRepo,
  }) => {
    const departmentManager = await getDepartmentManagerByUserIdRepo({
      userId,
    });
    if (!departmentManager) throw new AppError("مدیر دانشکده یافت نشد", 404);

    await createDepartmentGroupRepo({
      data: {
        title: data.body.title,
        departmentId: departmentManager.departmentId,
      },
    });

    return {
      ok: true,
      code: 200,
      message: "گروه آموزشی ایجاد گردید",
    };
  };
