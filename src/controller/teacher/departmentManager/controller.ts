import { createTeacherService } from "../../../application/modules/teacher/departmentManager/createTeacher.service.js";
import { deleteTeacherService } from "../../../application/modules/teacher/departmentManager/deleteTeacher.service.js";
import { editTeacherService } from "../../../application/modules/teacher/departmentManager/editTeacher.service.js";
import { getTeacherDetailService } from "../../../application/modules/teacher/departmentManager/getTeacherDetail.service.js";
import { getTeacherListService } from "../../../application/modules/teacher/departmentManager/getTeacherList.service.js";
import { EditTeacherSchema } from "../../../core/modules/teacher/schema/departmentManager/editTeacher.schema.js";
import { TControllerProps } from "../../../core/types.js";
import { createAddressRepo } from "../../../infrastructure/modules/address/createAddress.repo.js";
import { deleteAddressRepo } from "../../../infrastructure/modules/address/deleteAddress.repo.js";
import { editAddressRepo } from "../../../infrastructure/modules/address/editAddress.repo.js";
import { getAddressByUserIdRepo } from "../../../infrastructure/modules/address/getAddressByUserId.repo.js";
import { connectDepartmentGroupToTeacherRepo } from "../../../infrastructure/modules/departmentGroup/connectDepartmentGroupToTeacher.repo.js";
import { disconnectDepartmentGroupFromTeacherRepo } from "../../../infrastructure/modules/departmentGroup/disconnectDepartmentGroupFromTeacher.repo.js";
import { getDepartmentGroupByIdRepo } from "../../../infrastructure/modules/departmentGroup/getDepartmentGroupById.repo.js";
import { getDepartmentManagerByUserIdRepo } from "../../../infrastructure/modules/departmentManager/getDepartmentManagerById.repo.js";
import { createTeacherRepo } from "../../../infrastructure/modules/teacher/createTeacher.repo.js";
import { deleteTeacherRepo } from "../../../infrastructure/modules/teacher/deleteTeacher.repo.js";
import { getTeacherDetailRepo } from "../../../infrastructure/modules/teacher/departmentManager/getTeacherDetail.repo.js";
import { getTeacherListRepo } from "../../../infrastructure/modules/teacher/departmentManager/getTeacherList.repo.js";
import { editTeacherRepo } from "../../../infrastructure/modules/teacher/editTeacher.repo.js";
import { getTeacherByIdRepo } from "../../../infrastructure/modules/teacher/getTeacherById.repo.js";
import { getTeacherByUserIdRepo } from "../../../infrastructure/modules/teacher/getTeacherByUserId.repo.js";
import { getTeacherDepartmentGroupListRepo } from "../../../infrastructure/modules/teacher/getTeacherDepartmentGroupList.repo.js";
import { createUserRepo } from "../../../infrastructure/modules/user/createUser.repo.js";
import { editUserRepo } from "../../../infrastructure/modules/user/editUser.repo.js";
import { unitOfWorkRepo } from "../../../infrastructure/unitOfWork.repo.js";
import { response } from "../../../utils/response.js";

export const createTeacherController = async ({
  req,
  res,
  next,
}: TControllerProps) => {
  try {
    const result = await createTeacherService({
      data: {
        body: req.body,
      },
      userId: req.userId!,
      connectDepartmentGroupToTeacherRepo,
      createAddressRepo,
      createTeacherRepo,
      createUserRepo,
      getDepartmentGroupByIdRepo,
      getDepartmentManagerByUserIdRepo,
      unitOfWorkRepo,
    });
    return response(res, result);
  } catch (err) {
    return next(err);
  }
};

export const deleteTeacherController = async ({
  req,
  res,
  next,
}: TControllerProps) => {
  try {
    const result = await deleteTeacherService({
      id: req.params.id,
      userId: req.userId!,
      getDepartmentManagerByUserIdRepo,
      deleteTeacherRepo,
      getTeacherDepartmentGroupListRepo,
    });
    return response(res, result);
  } catch (err) {
    return next(err);
  }
};

export const editTeacherController = async ({
  req,
  res,
  next,
}: TControllerProps) => {
  const params = req.params as EditTeacherSchema["params"];
  try {
    const result = await editTeacherService({
      data: {
        body: req.body,
        params,
      },
      userId: req.userId!,
      getDepartmentManagerByUserIdRepo,
      getTeacherDepartmentGroupListRepo,
      connectDepartmentGroupToTeacherRepo,
      createAddressRepo,
      deleteAddressRepo,
      disconnectDepartmentGroupFromTeacherRepo,
      editAddressRepo,
      editTeacherRepo,
      editUserRepo,
      getAddressByUserIdRepo,
      unitOfWorkRepo,
      getTeacherByIdRepo: getTeacherByIdRepo,
    });
    return response(res, result);
  } catch (err) {
    return next(err);
  }
};

export const getTeacherDetailController = async ({
  req,
  res,
  next,
}: TControllerProps) => {
  try {
    const result = await getTeacherDetailService({
      id: req.params.id,
      userId: req.userId!,
      getTeacherDetailRepo,
    });
    return response(res, result);
  } catch (err) {
    return next(err);
  }
};

export const getTeacherListController = async ({
  req,
  res,
  next,
}: TControllerProps) => {
  try {
    const result = await getTeacherListService({
      userId: req.userId!,
      getDepartmentManagerByUserIdRepo,
      getTeacherListRepo,
    });
    return response(res, result);
  } catch (err) {
    return next(err);
  }
};
