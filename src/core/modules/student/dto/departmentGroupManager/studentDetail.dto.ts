import { StudentStatus, StudyMode } from "@prisma/client";

export type StudentDetailDTO = {
  id: string;
  status: StudentStatus;
  studyMode: StudyMode;
  entranceSemester: {
    year: number;
    isFirstSemester: boolean;
  };
  department: {
    title: string;
  };
  user: {
    firstName: string;
    lastName: string;
    fatherName: string;
    phoneNumber: string;
    nationalCode: string;
    zipCode: string | null;
    address: {
      province: string;
      city: string;
      router: string;
    } | null;
  };
};
