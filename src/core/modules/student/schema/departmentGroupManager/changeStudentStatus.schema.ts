import { StudentStatus } from "@prisma/client";
import z from "zod";

export const ChangeStudentStatusSchema = z.object({
  body: z.object({
    id: z.uuid("شناسه دانشجو ارسال نشده است"),
    status: z.enum(StudentStatus, "وضعیت دانشجو نا معتبر است"),
  }),
});

export type ChangeStudentStatusSchema = z.infer<
  typeof ChangeStudentStatusSchema
>;
