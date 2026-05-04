import { LessonDetailDTO } from "../../dto/departmentGroupManager/lessonDetail.dto.js";

export type GetLessonDetailRepo = ({
  id,
}: {
  id: string;
}) => Promise<LessonDetailDTO | null>;
