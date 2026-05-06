import { UnitOfWorkRepo } from "../../../../../application/unitOfWork.repo.js";
import { Response } from "../../../../response.js";
import { CreateAddressRepo } from "../../../address/repo/createAddress.repo.js";
import { DeleteAddressRepo } from "../../../address/repo/deleteAddress.repo.js";
import { EditAddressRepo } from "../../../address/repo/editAddress.repo.js";
import { GetAddressByUserIdRepo } from "../../../address/repo/getAddressByUserId.repo.js";
import { ConnectDepartmentGroupToTeacherRepo } from "../../../departmentGroup/repo/connectDepartmentGroupToTeacher.repo.js";
import { DisconnectDepartmentGroupFromTeacherRepo } from "../../../departmentGroup/repo/disconnectDepartmentGroupFromTeacher.repo.js";
import { GetDepartmentManagerByUserIdRepo } from "../../../departmentManager/repo/getDepartmentManagerByUserId.repo.js";
import { EditUserRepo } from "../../../user/repo/editUser.repo.js";
import { EditTeacherRepo } from "../../repo/editTeacher.repo.js";
import { GetTeacherByIdRepo } from "../../repo/getTeacherById.repo.js";
import { GetTeacherDepartmentGroupListRepo } from "../../repo/getTeacherDepartmentGroupList.repo.js";
import { EditTeacherSchema } from "../../schema/departmentManager/editTeacher.schema.js";

export type EditTeacherService = ({
  data,
  userId,
  createAddressRepo,
  deleteAddressRepo,
  editAddressRepo,
  editTeacherRepo,
  editUserRepo,
  getDepartmentManagerByUserIdRepo,
  getAddressByUserIdRepo,
  getTeacherDepartmentGroupListRepo,
  connectDepartmentGroupToTeacherRepo,
  disconnectDepartmentGroupFromTeacherRepo,
  getTeacherByIdRepo,
  unitOfWorkRepo,
}: {
  userId: string;
  data: EditTeacherSchema;
  editTeacherRepo: EditTeacherRepo;
  editUserRepo: EditUserRepo;
  editAddressRepo: EditAddressRepo;
  createAddressRepo: CreateAddressRepo;
  deleteAddressRepo: DeleteAddressRepo;
  getDepartmentManagerByUserIdRepo: GetDepartmentManagerByUserIdRepo;
  getAddressByUserIdRepo: GetAddressByUserIdRepo;
  getTeacherDepartmentGroupListRepo: GetTeacherDepartmentGroupListRepo;
  connectDepartmentGroupToTeacherRepo: ConnectDepartmentGroupToTeacherRepo;
  disconnectDepartmentGroupFromTeacherRepo: DisconnectDepartmentGroupFromTeacherRepo;
  getTeacherByIdRepo: GetTeacherByIdRepo;
  unitOfWorkRepo: UnitOfWorkRepo;
}) => Response;
