import { TeacherEntity } from "../entity/Teacher.entity.js";

export type EditTeacherRepo = ({
  data,
}: {
  data: Partial<TeacherEntity>;
}) => Promise<TeacherEntity>;
