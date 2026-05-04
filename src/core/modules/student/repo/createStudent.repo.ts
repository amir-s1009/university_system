import { StudentEntity } from "../entity/Student.entity.js";

export type CreateStudentRepo = ({
  data,
}: {
  data: Pick<
    StudentEntity,
    "departmentGroupId" | "enteranceSemesterId" | "studyMode" | "userId"
  >;
}) => Promise<StudentEntity>;
