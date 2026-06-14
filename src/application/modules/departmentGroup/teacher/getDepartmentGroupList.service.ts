import { GetDepartmentGroupListService } from "../../../../core/modules/departmentGroup/service/teacher/getDepartmentGroupList.service.js";
import { AppError } from "../../../error.js";

export const getDepartmentGroupListService: GetDepartmentGroupListService =
  async ({ userId, getDepartmentGroupListRepo, getTeacherByUserIdRepo }) => {
    const teacher = await getTeacherByUserIdRepo({
      userId,
    });
    if (!teacher) throw new AppError("استاد یافت نشد", 404);

    const departmentGroupList = await getDepartmentGroupListRepo({
      teacherId: teacher.id,
    });

    return {
      ok: true,
      code: 200,
      data: departmentGroupList,
    };
  };
