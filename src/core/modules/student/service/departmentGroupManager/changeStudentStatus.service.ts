import { Response } from "../../../../response.js";
import { GetDepartmentGroupManagerByUserIdRepo } from "../../../departmentGroupManager/repo/getDepartmentGroupManagerByUserId.repo.js";
import { EditStudentRepo } from "../../repo/editStudent.repo.js";
import { GetStudentByIdRepo } from "../../repo/getStudentById.repo.js";
import { ChangeStudentStatusSchema } from "../../schema/departmentGroupManager/changeStudentStatus.schema.js";

export type ChangeStudentStatusService = ({
  data,
  userId,
  editStudentRepo,
  getStudentByIdRepo,
  getDepartmentGroupManagerByUserIdRepo,
}: {
  data: ChangeStudentStatusSchema;
  userId: string;
  editStudentRepo: EditStudentRepo;
  getStudentByIdRepo: GetStudentByIdRepo;
  getDepartmentGroupManagerByUserIdRepo: GetDepartmentGroupManagerByUserIdRepo;
}) => Response;
