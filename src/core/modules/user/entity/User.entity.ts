import { Role } from "@prisma/client";

export type UserEntity = {
  id: string;
  firstName: string;
  lastName: string;
  fatherName: string;
  nationalCode: string;
  zipCode?: string | null;
  phoneNumber: string;
  birthDate: Date;
  role: Role;
  password: string;
};
