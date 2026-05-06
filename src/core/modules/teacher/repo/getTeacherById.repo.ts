import { TeacherEntity } from "../entity/Teacher.entity.js";

export type GetTeacherByIdRepo = ({
  id,
}: {
  id: string;
}) => Promise<TeacherEntity | null>;
