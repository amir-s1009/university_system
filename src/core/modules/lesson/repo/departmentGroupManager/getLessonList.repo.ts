import { LessonListItemDTO } from "../../dto/departmentGroupManager/lessonListItem.dto.js";

export type GetLessonListRepo = () => Promise<LessonListItemDTO[]>;
