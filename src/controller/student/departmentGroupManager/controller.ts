import { changeStudentStatusService } from "../../../application/modules/student/departmentGroupManager/changeStudentStatus.service.js";
import { createStudentService } from "../../../application/modules/student/departmentGroupManager/createStudent.service.js";
import { editStudentService } from "../../../application/modules/student/departmentGroupManager/editStudent.service.js";
import { getStudentDetailService } from "../../../application/modules/student/departmentGroupManager/getStudentDetail.service.js";
import { getStudentListService } from "../../../application/modules/student/departmentGroupManager/getStudentList.service.js";
import { EditStudentSchema } from "../../../core/modules/student/schema/departmentGroupManager/editStudent.schema.js";
import { TControllerProps } from "../../../core/types.js";
import { createAddressRepo } from "../../../infrastructure/modules/address/createAddress.repo.js";
import { deleteAddressRepo } from "../../../infrastructure/modules/address/deleteAddress.repo.js";
import { editAddressRepo } from "../../../infrastructure/modules/address/editAddress.repo.js";
import { getAddressByUserIdRepo } from "../../../infrastructure/modules/address/getAddressByUserId.repo.js";
import { getDepartmentGroupManagerByUserIdRepo } from "../../../infrastructure/modules/departmentGroupManager/getDepartmentGroupManagerByUserId.repo.js";
import { getGeneralSettingsRepo } from "../../../infrastructure/modules/generalSettings/getGeneralSettings.repo.js";
import { createStudentRepo } from "../../../infrastructure/modules/student/createStudent.repo.js";
import { getStudentDetailRepo } from "../../../infrastructure/modules/student/departmentGroupManager/getStudentDetail.repo.js";
import { getStudentListRepo } from "../../../infrastructure/modules/student/departmentGroupManager/getStudentList.repo.js";
import { editStudentRepo } from "../../../infrastructure/modules/student/editStudent.repo.js";
import { getStudentByIdRepo } from "../../../infrastructure/modules/student/getStudentById.repo.js";
import { createUserRepo } from "../../../infrastructure/modules/user/createUser.repo.js";
import { editUserRepo } from "../../../infrastructure/modules/user/editUser.repo.js";
import { unitOfWorkRepo } from "../../../infrastructure/unitOfWork.repo.js";
import { response } from "../../../utils/response.js";

export const changeStudentStatusController = async ({
  req,
  res,
  next,
}: TControllerProps) => {
  try {
    const result = await changeStudentStatusService({
      data: {
        body: req.body,
      },
      userId: req.userId!,
      editStudentRepo,
      getDepartmentGroupManagerByUserIdRepo,
      getStudentByIdRepo,
    });
    return response(res, result);
  } catch (err) {
    return next(err);
  }
};

export const createStudentController = async ({
  req,
  res,
  next,
}: TControllerProps) => {
  try {
    const result = await createStudentService({
      data: {
        body: req.body,
      },
      userId: req.userId!,
      getDepartmentGroupManagerByUserIdRepo,
      createAddressRepo,
      createStudentRepo,
      createUserRepo,
      getGeneralSettingsRepo,
      unitOfWorkRepo,
    });
    return response(res, result);
  } catch (err) {
    return next(err);
  }
};

export const editStudentController = async ({
  req,
  res,
  next,
}: TControllerProps) => {
  const params = req.params as EditStudentSchema["params"];
  try {
    const result = await editStudentService({
      data: {
        body: req.body,
        params,
      },
      userId: req.userId!,
      getDepartmentGroupManagerByUserIdRepo,
      createAddressRepo,
      deleteAddressRepo,
      editAddressRepo,
      editStudentRepo,
      editUserRepo,
      getAddressByUserIdRepo,
      getStudentByIdRepo,
      getGeneralSettingsRepo,
      unitOfWorkRepo,
    });
    return response(res, result);
  } catch (err) {
    return next(err);
  }
};

export const getStudentDetailController = async ({
  req,
  res,
  next,
}: TControllerProps) => {
  try {
    const result = await getStudentDetailService({
      id: req.params.id,
      getStudentDetailRepo,
    });
    return response(res, result);
  } catch (err) {
    return next(err);
  }
};

export const getStudentListController = async ({
  req,
  res,
  next,
}: TControllerProps) => {
  try {
    const result = await getStudentListService({
      userId: req.userId!,
      getStudentListRepo,
      getDepartmentGroupManagerByUserIdRepo,
    });
    return response(res, result);
  } catch (err) {
    return next(err);
  }
};
