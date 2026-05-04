import { StudentStatus, StudyMode } from "@prisma/client";

export type StudentListItemDTO = {
  id: string;
  status: StudentStatus;
  studyMode: StudyMode;
  department: {
    title: string;
  };
  user: {
    firstName: string;
    lastName: string;
    phoneNumber: string;
  };
};
