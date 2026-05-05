import { UnitOfWorkRepo } from "../../../../../application/unitOfWork.repo.js";
import { Response } from "../../../../response.js";
import { CreateAddressRepo } from "../../../address/repo/createAddress.repo.js";
import { GetDepartmentGroupManagerByUserIdRepo } from "../../../departmentGroupManager/repo/getDepartmentGroupManagerByUserId.repo.js";
import { GetGeneralSettingsRepo } from "../../../generalSettings/repo/getGeneralSettings.repo.js";
import { CreateUserRepo } from "../../../user/repo/createUser.repo.js";
import { CreateStudentRepo } from "../../repo/createStudent.repo.js";
import { CreateStudentSchema } from "../../schema/departmentGroupManager/createStudent.schema.js";

export type CreateStudentService = ({
  data,
  userId,
  createStudentRepo,
  getGeneralSettingsRepo,
  createUserRepo,
  createAddressRepo,
  getDepartmentGroupManagerByUserIdRepo,
  unitOfWorkRepo,
}: {
  data: CreateStudentSchema;
  userId: string;
  createStudentRepo: CreateStudentRepo;
  getGeneralSettingsRepo: GetGeneralSettingsRepo;
  createUserRepo: CreateUserRepo;
  createAddressRepo: CreateAddressRepo;
  getDepartmentGroupManagerByUserIdRepo: GetDepartmentGroupManagerByUserIdRepo;
  unitOfWorkRepo: UnitOfWorkRepo;
}) => Response;
