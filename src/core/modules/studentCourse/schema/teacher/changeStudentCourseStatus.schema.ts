import { StudentCourseStatus } from "@prisma/client";
import z from "zod";

export const ChangeStudentCourseStatusSchema = z.object({
  body: z.object({
    id: z.uuid("شناسه دوره دانشجو ارسال نشده است"),
    status: z.enum(StudentCourseStatus, "وضعیت دوره دانشجو غیر مجاز است"),
  }),
});

export type ChangeStudentCourseStatusSchema = z.infer<
  typeof ChangeStudentCourseStatusSchema
>;
