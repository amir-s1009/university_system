export type TeacherDetailDTO = {
  id: string;
  user: {
    id: string;
    firstName: string;
    lastName: string;
    fatherName: string;
    nationalCode: string;
    zipCode: string | null;
    address: {
      province: string;
      city: string;
      route: string;
    } | null;
  };
  departmentGroups: {
    id: string;
    title: string;
    manager: {
      user: {
        firstName: string;
        lastName: string;
      };
    };
  }[];
};
