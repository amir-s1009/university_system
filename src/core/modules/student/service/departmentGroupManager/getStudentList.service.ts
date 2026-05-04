import { Response } from "../../../../response.js";
import { StudentListItemDTO } from "../../dto/departmentGroupManager/studentListItem.dto.js";
import { GetStudentListRepo } from "../../repo/departmentGroupManager/getStudentList.repo.js";

export type GetStudentListService = ({
  getStudentListRepo,
}: {
  getStudentListRepo: GetStudentListRepo;
}) => Response<StudentListItemDTO[]>;
