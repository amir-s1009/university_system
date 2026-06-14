import { GetDepartmentGroupDetailService } from "../../../../core/modules/departmentGroup/service/departmentManager/getDepartmentGroupDetail.service.js";
import { AppError } from "../../../error.js";

export const getDepartmentGroupDetailService: GetDepartmentGroupDetailService =
  async ({ id, getDepartmentGroupDetailRepo }) => {
    const departmentGroupDetail = await getDepartmentGroupDetailRepo({
      id,
    });
    if (!departmentGroupDetail) throw new AppError("گروه آموزشی یافت نشد", 404);

    return {
      ok: true,
      code: 200,
      data: departmentGroupDetail,
    };
  };
