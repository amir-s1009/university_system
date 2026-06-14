import { Role } from "@prisma/client";
import { CreateTeacherService } from "../../../../core/modules/teacher/service/departmentManager/createTeacher.service.js";
import { AppError } from "../../../error.js";
import { hash } from "../../../../core/modules/auth/utils/impl/hash.js";
import { SALT_ROUND } from "../../../../core/modules/auth/constant.js";

export const createTeacherService: CreateTeacherService = async ({
  data,
  userId,
  createTeacherRepo,
  getDepartmentManagerByUserIdRepo,
  createUserRepo,
  createAddressRepo,
  connectDepartmentGroupToTeacherRepo,
  getDepartmentGroupByIdRepo,
  unitOfWorkRepo,
}) => {
  const departmentManager = await getDepartmentManagerByUserIdRepo({
    userId,
  });
  if (!departmentManager) throw new AppError("مدیر دانشکده یافت نشد", 404);

  if (data.body.departmentGroups) {
    for (const { departmentGroupId } of data.body.departmentGroups) {
      const departmentGroup = await getDepartmentGroupByIdRepo({
        id: departmentGroupId,
      });
      if (!departmentGroup)
        throw new AppError("گروه آموزشی با شناسه ارسال شده یافت نشد", 404);
      if (departmentGroup.departmentId !== departmentManager.departmentId)
        throw new AppError(
          "شما فقط مجاز به انتصاب استاد به گروه های آموزشی دانشکده خودتان هستید",
          403
        );
    }
  }

  await unitOfWorkRepo(async (tx) => {
    const userCreated = await createUserRepo(
      {
        data: {
          firstName: data.body.user.firstName,
          lastName: data.body.user.lastName,
          fatherName: data.body.user.fatherName,
          birthDate: new Date(data.body.user.birthDate),
          nationalCode: String(data.body.user.nationalCode),
          phoneNumber: String(data.body.user.phoneNumber),
          zipCode: data.body.user.zipCode
            ? String(data.body.user.zipCode)
            : null,
          role: Role.TEACHER,
          password: await hash({ raw: "1234567", salt: SALT_ROUND }),
        },
      },
      tx
    );

    if (data.body.user.address) {
      await createAddressRepo(
        {
          data: {
            userId: userCreated.id,
            province: data.body.user.address.province,
            city: data.body.user.address.city,
            route: data.body.user.address.route,
          },
        },
        tx
      );
    }

    const teacherCreated = await createTeacherRepo(
      {
        data: {
          userId: userCreated.id,
        },
      },
      tx
    );

    if (data.body.departmentGroups) {
      await Promise.all(
        data.body.departmentGroups.map((departmentGroup) => {
          return connectDepartmentGroupToTeacherRepo(
            {
              departmentGroupId: departmentGroup.departmentGroupId,
              teacherId: teacherCreated.id,
            },
            tx
          );
        })
      );
    }
  });

  return {
    ok: true,
    code: 200,
    message: "استاد با موفقیت ایجاد شد",
  };
};
