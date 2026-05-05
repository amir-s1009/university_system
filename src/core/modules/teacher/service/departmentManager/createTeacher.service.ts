import { Response } from "../../../../response.js";
import { CreateAddressRepo } from "../../../address/repo/createAddress.repo.js";
import { GetDepartmentGroupByIdRepo } from "../../../departmentGroup/repo/getDepartmentGroupById.repo.js";
import { GetDepartmentManagerByUserIdRepo } from "../../../departmentManager/repo/getDepartmentManagerByUserId.repo.js";
import { CreateUserRepo } from "../../../user/repo/createUser.repo.js";
import { ConnectDepartmentGroupToTeacherRepo } from "../../../departmentGroup/repo/connectDepartmentGroupToTeacher.repo.js";
import { CreateTeacherRepo } from "../../repo/createTeacher.repo.js";
import { CreateTeacherSchema } from "../../schema/departmentManager/createTeacher.schema.js";
import { UnitOfWorkRepo } from "../../../../../application/unitOfWork.repo.js";

export type CreateTeacherService = ({
  data,
  userId,
  createTeacherRepo,
  getDepartmentManagerByUserIdRepo,
  createUserRepo,
  createAddressRepo,
  connectDepartmentGroupToTeacherRepo,
  getDepartmentGroupByIdRepo,
  unitOfWorkRepo,
}: {
  userId: string;
  data: CreateTeacherSchema;
  createTeacherRepo: CreateTeacherRepo;
  getDepartmentManagerByUserIdRepo: GetDepartmentManagerByUserIdRepo;
  createUserRepo: CreateUserRepo;
  createAddressRepo: CreateAddressRepo;
  connectDepartmentGroupToTeacherRepo: ConnectDepartmentGroupToTeacherRepo;
  getDepartmentGroupByIdRepo: GetDepartmentGroupByIdRepo;
  unitOfWorkRepo: UnitOfWorkRepo;
}) => Response;
