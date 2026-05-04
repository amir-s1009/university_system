import { Response } from "../../../../response.js";
import { EditStudentRepo } from "../../repo/editStudent.repo.js";
import { EditStudentSchema } from "../../schema/departmentGroupManager/editStudent.schema.js";

export type EditStudentService = ({
  data,
  userId,
  editStudentRepo,
}: {
  data: EditStudentSchema;
  userId: string;
  editStudentRepo: EditStudentRepo;
}) => Response;
