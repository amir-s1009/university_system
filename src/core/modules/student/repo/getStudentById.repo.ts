import { StudentEntity } from "../entity/Student.entity.js";

export type GetStudentByIdRepo = ({
  id,
}: {
  id: string;
}) => Promise<StudentEntity | null>;
