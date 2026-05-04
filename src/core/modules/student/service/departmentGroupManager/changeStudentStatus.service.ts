import { Response } from "../../../../response.js";
import { EditStudentRepo } from "../../repo/editStudent.repo.js";
import { ChangeStudentStatusSchema } from "../../schema/departmentGroupManager/changeStudentStatus.schema.js";

export type ChangeStudentStatusService = ({
  data,
  userId,
  editStudentRepo,
}: {
  data: ChangeStudentStatusSchema;
  userId: string;
  editStudentRepo: EditStudentRepo;
}) => Response;
