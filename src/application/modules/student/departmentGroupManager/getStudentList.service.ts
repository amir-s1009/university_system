import { GetStudentListService } from "../../../../core/modules/student/service/departmentGroupManager/getStudentList.service.js";
import { AppError } from "../../../error.js";

export const getStudentListService: GetStudentListService = async ({
  userId,
  getDepartmentGroupManagerByUserIdRepo,
  getStudentListRepo,
}) => {
  const departmentGroupManager = await getDepartmentGroupManagerByUserIdRepo({
    userId,
  });
  if (!departmentGroupManager)
    throw new AppError("مدیر گروه آموزشی یافت نشد", 404);

  const studentList = await getStudentListRepo({
    departmentGroupId: departmentGroupManager.departmentGroupId,
  });

  return {
    code: 200,
    data: studentList,
  };
};
