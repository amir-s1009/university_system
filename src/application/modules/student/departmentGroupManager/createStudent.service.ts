import { Role } from "@prisma/client";
import { CreateStudentService } from "../../../../core/modules/student/service/departmentGroupManager/createStudent.service.js";
import { AppError } from "../../../error.js";

export const createStudentService: CreateStudentService = async ({
  data,
  userId,
  createStudentRepo,
  createUserRepo,
  getGeneralSettingsRepo,
  createAddressRepo,
  getDepartmentGroupManagerByUserIdRepo,
  unitOfWorkRepo,
}) => {
  const departmentGroupManager = await getDepartmentGroupManagerByUserIdRepo({
    userId,
  });
  if (!departmentGroupManager)
    throw new AppError("مدیر گروه آموزشی یافت نشد", 404);

  const generalSettings = await getGeneralSettingsRepo();
  if (!generalSettings) throw new AppError("تنظیمات عمومی سیستم یافت نشد", 404);

  await unitOfWorkRepo(async (tx) => {
    const userCreated = await createUserRepo(
      {
        data: {
          firstName: data.body.user.firstName,
          lastName: data.body.user.lastName,
          fatherName: data.body.user.fatherName,
          birthDate: data.body.user.birthData,
          nationalCode: String(data.body.user.nationalCode),
          phoneNumber: String(data.body.user.phoneNumber),
          zipCode: data.body.user.zipCode
            ? String(data.body.user.zipCode)
            : null,
          role: Role.STUDENT,
        },
      },
      tx
    );

    if (data.body.user.address) {
      await createAddressRepo(
        {
          data: {
            province: data.body.user.address.province,
            city: data.body.user.address.city,
            route: data.body.user.address.route,
            userId: userCreated.id,
          },
        },
        tx
      );
    }
    await createStudentRepo(
      {
        data: {
          userId: userCreated.id,
          departmentGroupId: departmentGroupManager.departmentGroupId,
          enteranceSemesterId: generalSettings.activeSemesterId,
          studyMode: data.body.studyMode,
        },
      },
      tx
    );
  });

  return {
    code: 200,
    message: "دانشجوی مورد نظر ایجاد گردید",
  };
};
