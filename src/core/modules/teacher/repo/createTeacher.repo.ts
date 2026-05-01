import { TeacherEntity } from "../entity/Teacher.entity.js";

export type CreateTeacherRepo = ({
  data,
}: {
  data: Pick<TeacherEntity, "userId">;
}) => Promise<TeacherEntity>;
