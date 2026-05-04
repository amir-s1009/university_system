import { StudentListItemDTO } from "../../dto/departmentGroupManager/studentListItem.dto.js";

export type GetStudentListRepo = () => Promise<StudentListItemDTO[]>;
