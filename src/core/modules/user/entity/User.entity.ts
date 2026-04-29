export type UserEntity = {
  id: string;
  firstName: string;
  lastName: string;
  fatherName: string;
  nationalCode: string;
  zipCode?: string | null;
  phoneNumber: string;
  birthDate: Date;
};
