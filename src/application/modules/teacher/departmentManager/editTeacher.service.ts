import { DepartmentGroupEntity } from "../../../../core/modules/departmentGroup/entity/DepartmentGroup.entity.js";
import { EditTeacherService } from "../../../../core/modules/teacher/service/departmentManager/editTeacher.service.js";
import { getDepartmentGroupByIdRepo } from "../../../../infrastructure/modules/departmentGroup/getDepartmentGroupById.repo.js";
import { AppError } from "../../../error.js";

export const editTeacherService: EditTeacherService = async ({
  data,
  userId,
  createAddressRepo,
  deleteAddressRepo,
  editAddressRepo,
  editTeacherRepo,
  editUserRepo,
  getDepartmentManagerByUserIdRepo,
  getAddressByUserIdRepo,
  connectDepartmentGroupToTeacherRepo,
  disconnectDepartmentGroupFromTeacherRepo,
  getTeacherDepartmentGroupListRepo,
  getTeacherByIdRepo,
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

  const teacher = await getTeacherByIdRepo({
    id: data.params.id,
  });
  if (!teacher) throw new AppError("استاد یافت نشد", 404);

  const address = await getAddressByUserIdRepo({
    userId,
  });

  const teacherDepartmentGroups = await getTeacherDepartmentGroupListRepo({
    teacherId: data.params.id,
  });

  let newlyAddedDepartmentGroups: { departmentGroupId: string }[] | undefined;
  let removedDepartmentGroups: DepartmentGroupEntity[] | undefined;

  if (data.body.departmentGroups) {
    newlyAddedDepartmentGroups = data.body.departmentGroups.filter(
      (departmentGroup) =>
        !teacherDepartmentGroups.find(
          (tdg) => tdg.id === departmentGroup.departmentGroupId
        )
    );
    removedDepartmentGroups = teacherDepartmentGroups.filter(
      (tdg) =>
        !data.body.departmentGroups!.find(
          (departmentGroup) => departmentGroup.departmentGroupId === tdg.id
        )
    );
  }

  await unitOfWorkRepo(async (tx) => {
    if (data.body.user.address && address) {
      await editAddressRepo(
        {
          data: {
            id: address.id,
            userId: userId,
            province: data.body.user.address.province,
            city: data.body.user.address.city,
            route: data.body.user.address.route,
          },
        },
        tx
      );
    } else if (data.body.user.address && !address) {
      await createAddressRepo(
        {
          data: {
            userId: userId,
            province: data.body.user.address.province,
            city: data.body.user.address.city,
            route: data.body.user.address.route,
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

    const userEdited = await editUserRepo(
      {
        data: {
          id: teacher.userId,
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

    const teacherEdited = await editTeacherRepo(
      {
        data: {
          id: data.params.id,
          userId: userEdited.id,
        },
      },
      tx
    );

    if (newlyAddedDepartmentGroups) {
      await Promise.all(
        newlyAddedDepartmentGroups.map((departmentGroup) => {
          return connectDepartmentGroupToTeacherRepo(
            {
              departmentGroupId: departmentGroup.departmentGroupId,
              teacherId: teacherEdited.id,
            },
            tx
          );
        })
      );
    }

    if (removedDepartmentGroups) {
      await Promise.all(
        removedDepartmentGroups.map((departmentGroup) => {
          return disconnectDepartmentGroupFromTeacherRepo(
            {
              departmentGroupId: departmentGroup.id,
              teacherId: teacherEdited.id,
            },
            tx
          );
        })
      );
    }

    if (!data.body.departmentGroups) {
      await Promise.all(
        teacherDepartmentGroups.map((departmentGroup) => {
          return disconnectDepartmentGroupFromTeacherRepo(
            {
              departmentGroupId: departmentGroup.id,
              teacherId: teacherEdited.id,
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
