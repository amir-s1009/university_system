import { TeacherEntity } from "../entity/Teacher.entity.js";

export type DeleteTeacherRepo = ({
  id,
}: {
  id: string;
}) => Promise<TeacherEntity>;
