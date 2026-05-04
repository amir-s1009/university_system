import { StudentEntity } from "../entity/Student.entity.js";

export type EditStudentRepo = ({
  data,
}: {
  data: Partial<StudentEntity>;
}) => Promise<StudentEntity>;
