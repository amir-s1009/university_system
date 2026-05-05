import { UnitOfWorkRepo } from "../../../../../application/unitOfWork.repo.js";
import { Response } from "../../../../response.js";
import { CreateAddressRepo } from "../../../address/repo/createAddress.repo.js";
import { DeleteAddressRepo } from "../../../address/repo/deleteAddress.repo.js";
import { EditAddressRepo } from "../../../address/repo/editAddress.repo.js";
import { GetAddressByUserIdRepo } from "../../../address/repo/getAddressByUserId.repo.js";
import { GetDepartmentGroupManagerByUserIdRepo } from "../../../departmentGroupManager/repo/getDepartmentGroupManagerByUserId.repo.js";
import { GetGeneralSettingsRepo } from "../../../generalSettings/repo/getGeneralSettings.repo.js";
import { EditUserRepo } from "../../../user/repo/editUser.repo.js";
import { EditStudentRepo } from "../../repo/editStudent.repo.js";
import { GetStudentByIdRepo } from "../../repo/getStudentById.repo.js";
import { EditStudentSchema } from "../../schema/departmentGroupManager/editStudent.schema.js";

export type EditStudentService = ({
  data,
  userId,
  editStudentRepo,
  createAddressRepo,
  deleteAddressRepo,
  editAddressRepo,
  editUserRepo,
  getDepartmentGroupManagerByUserIdRepo,
  getGeneralSettingsRepo,
  getStudentByIdRepo,
  getAddressByUserIdRepo,
  unitOfWorkRepo,
}: {
  data: EditStudentSchema;
  userId: string;
  editStudentRepo: EditStudentRepo;
  editUserRepo: EditUserRepo;
  getGeneralSettingsRepo: GetGeneralSettingsRepo;
  createAddressRepo: CreateAddressRepo;
  editAddressRepo: EditAddressRepo;
  deleteAddressRepo: DeleteAddressRepo;
  getStudentByIdRepo: GetStudentByIdRepo;
  getAddressByUserIdRepo: GetAddressByUserIdRepo;
  getDepartmentGroupManagerByUserIdRepo: GetDepartmentGroupManagerByUserIdRepo;
  unitOfWorkRepo: UnitOfWorkRepo;
}) => Response;
