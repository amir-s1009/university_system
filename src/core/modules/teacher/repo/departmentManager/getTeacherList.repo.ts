import { TeacherListItemDTO } from "../../dto/departmentManager/teacherListItem.dto.js";

export type GetTeacherListRepo = () => Promise<TeacherListItemDTO[]>;
