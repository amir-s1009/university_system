import { Response } from "../../../../response.js";
import { CreateStudentRepo } from "../../repo/createStudent.repo.js";
import { CreateStudentSchema } from "../../schema/departmentGroupManager/createStudent.schema.js";

export type CreateStudentService = ({
  data,
  userId,
  createStudentRepo,
}: {
  data: CreateStudentSchema;
  userId: string;
  createStudentRepo: CreateStudentRepo;
}) => Response;
