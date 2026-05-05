import { GetDepartmentGroupListService } from "../../../../core/modules/departmentGroup/service/departmentManager/getDepartmentGroupList.service.js";
import { AppError } from "../../../error.js";

export const getDepartmentGroupListService: GetDepartmentGroupListService =
  async ({
    userId,
    getDepartmentGroupListRepo,
    getDepartmentManagerByUserIdRepo,
  }) => {
    const departmentManager = await getDepartmentManagerByUserIdRepo({
      userId,
    });
    if (!departmentManager) throw new AppError("مدیر دانشکده یافت نشد", 404);

    const departmentGroupList = await getDepartmentGroupListRepo({
      departmentId: departmentManager.departmentId,
    });

    return { code: 200, data: departmentGroupList };
  };
