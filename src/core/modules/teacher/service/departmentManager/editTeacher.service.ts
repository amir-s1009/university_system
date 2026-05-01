import { Response } from "../../../../response.js";
import { EditTeacherSchema } from "../../schema/departmentManager/editTeacher.schema.js";

export type EditTeacherService = ({
  data,
  userId,
}: {
  userId: string;
  data: EditTeacherSchema;
}) => Response;
