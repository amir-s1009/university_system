import { StudentEntity } from "../entity/Student.entity.js";

export type DeleteStudentRepo = ({
  id,
}: {
  id: string;
}) => Promise<StudentEntity>;
