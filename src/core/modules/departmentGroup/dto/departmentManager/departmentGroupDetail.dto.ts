export type DepartmentGroupDetailDTO = {
  id: string;
  title: string;
  departmentId: string;
  manager?: {
    user: {
      id: string;
      firstName: string;
      lastName: string;
    };
  } | null;
};
