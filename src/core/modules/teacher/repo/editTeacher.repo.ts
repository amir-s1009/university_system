import { TeacherEntity } from "../entity/Teacher.entity.js";

export type EditTeacherRepo = ({
  data,
}: {
  data: TeacherEntity;
}) => Promise<TeacherEntity>;
