import { Response } from "../../../../response.js";
import { CreateTeacherSchema } from "../../schema/departmentManager/createTeacher.schema.js";

export type CreateTeacherService = ({
  data,
  userId,
}: {
  userId: string;
  data: CreateTeacherSchema;
}) => Response;
