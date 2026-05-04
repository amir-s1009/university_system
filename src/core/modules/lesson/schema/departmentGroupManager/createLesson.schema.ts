import { LessonType } from "@prisma/client";
import z from "zod";

export const CreateLessonSchema = z.object({
  body: z.object({
    title: z.string("عنوان درس ارسال نشده است"),
    coefficient: z
      .number("ضریب درس ارسال نشده است")
      .min(1, "ضریب درس نمیتواند کمتر از 1 باشد"),
    departmentGroupId: z.uuid("شناسه گروه آموزشی ارسال نشده است"),
    lessonType: z.enum(LessonType, "نوع درس غیر مجاز است"),
  }),
});

export type CreateLessonSchema = z.infer<typeof CreateLessonSchema>;
