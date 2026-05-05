import { AppError } from "../../../error.js";
import { EditStudentService } from "../../../../core/modules/student/service/departmentGroupManager/editStudent.service.js";

export const editStudentService: EditStudentService = async ({
  data,
  userId,
  editStudentRepo,
  deleteAddressRepo,
  editAddressRepo,
  editUserRepo,
  createAddressRepo,
  getDepartmentGroupManagerByUserIdRepo,
  getGeneralSettingsRepo,
  getStudentByIdRepo,
  getAddressByUserIdRepo,
  unitOfWorkRepo,
}) => {
  const departmentGroupManager = await getDepartmentGroupManagerByUserIdRepo({
    userId,
  });
  if (!departmentGroupManager)
    throw new AppError("مدیر گروه آموزشی یافت نشد", 404);

  const student = await getStudentByIdRepo({
    id: data.params.id,
  });
  if (!student) throw new AppError("دانشجو یافت نشد", 404);

  if (departmentGroupManager.departmentGroupId !== student.departmentGroupId)
    throw new AppError(
      "شما فقط مجاز به ویرایش دانشجوی گروه آموزشی خودتان هستید",
      403
    );

  const address = await getAddressByUserIdRepo({
    userId: student.userId,
  });

  const generalSettings = await getGeneralSettingsRepo();
  if (!generalSettings) throw new AppError("تنظیمات عمومی سیستم یافت نشد", 404);

  await unitOfWorkRepo(async (tx) => {
    await editUserRepo(
      {
        data: {
          id: student.userId,
          firstName: data.body.user.firstName,
          lastName: data.body.user.lastName,
          fatherName: data.body.user.fatherName,
          birthDate: data.body.user.birthData,
          nationalCode: String(data.body.user.nationalCode),
          phoneNumber: String(data.body.user.phoneNumber),
          zipCode: data.body.user.zipCode
            ? String(data.body.user.zipCode)
            : null,
        },
      },
      tx
    );

    if (data.body.user.address && address) {
      await editAddressRepo(
        {
          data: {
            id: address.id,
            province: data.body.user.address.province,
            city: data.body.user.address.city,
            route: data.body.user.address.route,
            userId: student.userId,
          },
        },
        tx
      );
    } else if (data.body.user.address && !address) {
      await createAddressRepo(
        {
          data: {
            province: data.body.user.address.province,
            city: data.body.user.address.city,
            route: data.body.user.address.route,
            userId: student.userId,
          },
        },
        tx
      );
    } else if (!data.body.user.address && address) {
      await deleteAddressRepo(
        {
          id: address.id,
        },
        tx
      );
    }

    await editStudentRepo(
      {
        data: {
          id: data.params.id,
          userId: student.userId,
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
