import { Response } from "../../../../response.js";
import { TeacherListItemDTO } from "../../dto/departmentManager/teacherListItem.dto.js";

export type GetTeacherListService = ({
  userId,
}: {
  userId: string;
}) => Response<TeacherListItemDTO[]>;
